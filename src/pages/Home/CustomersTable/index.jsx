/* eslint-disable react/no-array-index-key */
import { useEffect, useMemo } from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { setColumnsTitle } from 'redux/customers/reducer';
import { getCustomers } from 'redux/customers/selectors';

import { styledTableCell, styledTableHead } from './style';

const CustomersTable = () => {
  const dispatch = useDispatch();
  const { customers, columnsTitle } = useSelector(getCustomers);

  const selectedCustomers = useMemo(
    () =>
      customers?.map((customer) => {
        return columnsTitle.reduce((accumulator, key) => {
          return {
            ...accumulator,
            [key]: customer[key],
          };
        }, {});
      }),
    [columnsTitle, customers]
  );

  useEffect(() => {
    if (customers[0]) {
      dispatch(setColumnsTitle(Object.keys(customers[0])));
    }
  }, [customers, dispatch]);

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table aria-label="table with customers">
        <TableHead>
          <TableRow>
            {columnsTitle?.map((column) => (
              <TableCell component="th" key={column} sx={styledTableHead}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedCustomers?.map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((value) => (
                <TableCell key={value} sx={styledTableCell}>
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomersTable;
