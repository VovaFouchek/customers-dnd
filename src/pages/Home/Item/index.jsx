/* eslint-disable react/jsx-props-no-spreading */

import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { useDraggableInPortal } from 'hooks';

const StyledItem = styled.div`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #9273c1;
  text-transform: uppercase;
  transition: 'background-color .8s ease-out';
`;

const Item = ({ text, index }) => {
  const renderDraggable = useDraggableInPortal();

  return (
    <Draggable draggableId={text} index={index}>
      {renderDraggable((provided) => (
        <StyledItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {text}
        </StyledItem>
      ))}
    </Draggable>
  );
};

export default Item;

Item.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
