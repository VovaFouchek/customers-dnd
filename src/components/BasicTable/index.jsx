import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

import { getCustomers } from 'redux/customers/selectors';

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'username', label: 'Username' },
  { id: 'email', label: 'Email' },
  { id: 'address', label: 'Address' },
  { id: 'phone', label: 'Phone' },
  { id: 'website', label: 'Website' },
  { id: 'company', label: 'Company' },
];

const BasicTable = () => {
  const { customers } = useSelector(getCustomers);

  const getColumnElementById = columns.map((element) => element.id);

  const selectedCustomers = customers?.map((item) => {
    return getColumnElementById.reduce((accumulator, key) => {
      return {
        ...accumulator,
        [key]: item[key],
      };
    }, {});
  });

  const styledTableHead = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  };

  const styledTableCell = {
    textAlign: 'center',
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="table with customers">
        <TableHead>
          <TableRow>
            {columns?.map((column) => (
              <TableCell component="th" key={column.id} sx={styledTableHead}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedCustomers?.map((row) => (
            <TableRow key={row.id}>
              {Object.keys(row).map((key) => (
                <TableCell key={nanoid()} sx={styledTableCell}>
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
