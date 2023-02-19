import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { MainButton } from 'components';
import { filterData } from 'helpers';
import { setColumnsTitle } from 'redux/customers/reducer';
import { getCustomers } from 'redux/customers/selectors';
import { device } from 'styles/Breakpoints';

import Column from '../Column';

const StyledColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 460px;
  gap: 30px;

  @media ${device.md} {
    grid-template-columns: 1fr;
    overflow: auto;
  }
`;

const DragAndDrop = ({ onClose, searchQuery }) => {
  const dispatch = useDispatch();
  const { columnsTitle, customers } = useSelector(getCustomers);
  const [columns, setColumns] = useState({});
  const [filteredAvailable, setFilteredAvailable] = useState([]);

  useEffect(() => {
    const allColumnsTitle = Object.keys(customers[0]);

    const initialAvailableColumns = allColumnsTitle.filter(
      (column) => !columnsTitle.includes(column)
    );

    setFilteredAvailable(initialAvailableColumns);

    const initialColumns = {
      available: {
        id: 'available',
        title: 'Available Columns',
        list: initialAvailableColumns,
      },
      selected: {
        id: 'selected',
        title: 'Selected Columns',
        list: columnsTitle,
      },
    };
    setColumns(initialColumns);
  }, [columnsTitle, customers]);

  useEffect(() => {
    setColumns((prevState) => ({
      ...prevState,
      available: {
        ...prevState.available,
        list: filterData(filteredAvailable, searchQuery),
      },
    }));
  }, [filteredAvailable, searchQuery]);

  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter((_, idx) => idx !== source.index);

      // Then insert the item at the right location
      const newStartList = [
        ...newList.slice(0, destination.index),
        end.list[source.index],
        ...newList.slice(destination.index),
      ];
      // newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        title: start.title,
        list: newStartList,
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    }
    // If start is different from end, we need to update multiple columns
    // Filter the start list like before
    const newStartList = start.list.filter((_, idx) => idx !== source.index);

    // Create a new start column
    const newStartCol = {
      id: start.id,
      title: start.title,
      list: newStartList,
    };

    // Make a new end list array
    // Insert the item into the end list
    const newEndList = [
      ...end.list.slice(0, destination.index),
      start.list[source.index],
      ...end.list.slice(destination.index),
    ];

    // Create a new end column
    const newEndCol = {
      id: end.id,
      title: end.title,
      list: newEndList,
    };

    // Update the state
    setColumns((state) => ({
      ...state,
      [newStartCol.id]: newStartCol,
      [newEndCol.id]: newEndCol,
    }));

    setFilteredAvailable(
      newStartCol.id === 'available'
        ? filteredAvailable.filter((item) => item !== start.list[source.index])
        : [
            ...filteredAvailable.slice(0, destination.index),
            start.list[source.index],
            ...filteredAvailable.slice(destination.index),
          ]
    );

    return null;
  };

  const handleClick = () => {
    dispatch(setColumnsTitle(columns.selected.list));
    onClose();
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <StyledColumns>
          {Object.values(columns).map((col) => (
            <Column col={col} key={col.id} />
          ))}
        </StyledColumns>
      </DragDropContext>
      <MainButton onClick={handleClick}>Apply</MainButton>
    </>
  );
};

export default DragAndDrop;

DragAndDrop.propTypes = {
  onClose: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
};
