import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { MainButton, SearchBar } from 'components';
import { setColumnsTitle } from 'redux/customers/reducer';
import { getCustomers } from 'redux/customers/selectors';

import { Column, Item, styledIcon, Wrap, WrapperItem } from './style';

const PopUpContent = ({ handleClosePopUp }) => {
  const dispatch = useDispatch();
  const { columnsTitle, customers } = useSelector(getCustomers);
  const allColumnsTitle = Object.keys(customers[0]);

  const initialAvailableColumns = allColumnsTitle.filter(
    (column) => columnsTitle.indexOf(column) === -1
  );

  const [selectedColumns, setSelectedColumns] = useState(columnsTitle);
  const [availableColumns, setAvailableColumns] = useState(
    initialAvailableColumns
  );

  // const add = (currentValue) => {
  //   if (availableColumns.find((c) => c.id === currentValue.id)) return;
  //   setSelectedColumns([...selectedColumns, currentValue]);
  // };

  const removeColumn = (currentValue) => {
    setSelectedColumns(
      selectedColumns.filter((element) => element !== currentValue)
    );
    const result = columnsTitle.find((element) => element === currentValue);
    setAvailableColumns([...availableColumns, result]);
  };

  const handleClick = () => {
    dispatch(setColumnsTitle(selectedColumns));
    handleClosePopUp();
  };

  return (
    <>
      <SearchBar placeholder="Search available columns..." />
      <Wrap>
        <Column>
          <Typography variant="h6" component="h2" textAlign="center" mb={3}>
            Available Columns
          </Typography>
          {availableColumns.map((column) => (
            <Item key={column} aria-hidden="true">
              {column}
            </Item>
          ))}
        </Column>
        <Column>
          <Typography variant="h6" component="h2" textAlign="center" mb={3}>
            Selected Columns
          </Typography>
          {selectedColumns.map((column) => (
            <WrapperItem key={column}>
              <Item key={column} aria-hidden="true">
                {column}
              </Item>
              <CloseIcon onClick={() => removeColumn(column)} sx={styledIcon} />
            </WrapperItem>
          ))}
        </Column>
      </Wrap>
      <MainButton onClick={() => handleClick()}>Apply</MainButton>
    </>
  );
};

export default PopUpContent;

PopUpContent.propTypes = {
  handleClosePopUp: PropTypes.func.isRequired,
};
