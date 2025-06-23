import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from '../component/navbar';

function createData(
  Month: string,
  Monthly_Fees: number,
  Paid: number,
  Pending: number,
  Make_Payment: string,
) {
  return { Month,Monthly_Fees,Paid,Pending,Make_Payment };
}

const rows = [
  createData('June', 700, 0, 700, 'Pay'),
  createData('July', 237, 9.0, 37,'Pay'),
  createData('Aug', 262, 16.0, 24, 'Pay'),
  createData('Sep', 305, 3.7, 67, 'Pay'),
  createData('Oct', 356, 16.0, 49,'Pay'),
];

export default function FeesTable() {
  return (<>
    <ResponsiveAppBar/>
    <TableContainer component={Paper} sx={{margin:"10px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell align="right">Fees</TableCell>
            <TableCell align="right">Paid</TableCell>
            <TableCell align="right">Pending</TableCell>
            <TableCell align="right">Pay Online</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Month}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Month}
              </TableCell>
              <TableCell align="right">{row.Monthly_Fees}</TableCell>
              <TableCell align="right">{row.Paid}</TableCell>
              <TableCell align="right">{row.Pending}</TableCell>
              <TableCell align="right">{row.Make_Payment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
