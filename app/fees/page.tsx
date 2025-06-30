import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from '../component/navbar';
import { Box, Button } from '@mui/material';

function createData(
  Month: string,
  Due_date:string,
  Monthly_Fees: number,
  Paid: number,
  Pending: number,
  Make_Payment: string,
  Payment_date:string,
) {
  return { Month, Due_date, Monthly_Fees, Paid, Pending, Make_Payment, Payment_date };
}

const rows = [
  createData('May',"10-05-25",700, 0, 700, 'Pay','-'),
  createData('June',"10-06-25",700, 0, 700, 'Pay','-'),
  createData('July', "10-07-25",237, 9.0, 37, 'Pay','-'),
  createData('Aug',"10-08-25", 262, 16.0, 24, 'Pay','-'),
  createData('Sep', "10-09-25",305, 3.7, 67, 'Pay','-'),
  createData('Oct',"10-10-25", 356, 16.0, 49, 'Pay','-'),
  createData('Nov', "10-11-25",356, 16.0, 49, 'Pay','-'),
  createData('Dec', "10-12-25",356, 16.0, 49, 'Pay','-'),
];

export default function FeesTable() {
  return (<>
    <ResponsiveAppBar/>
    <TableContainer component={Paper} elevation={3} sx={{
  margin: '40px auto', // auto horizontally centers
  padding: 2,
  borderRadius: 3,
  boxShadow: 5,
  backgroundColor: '#fdfdfd',
  width: "800px"
}}>

  <Table size="medium" sx={{  minWidth: 400 }} aria-label="fees table">
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: 'bold' }}>Month</TableCell>
         <TableCell sx={{ fontWeight: 'bold' }}>Due Date</TableCell>
        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Fees</TableCell>
        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Paid</TableCell>
        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Pending</TableCell>
        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Pay</TableCell>
         <TableCell sx={{ fontWeight: 'bold' }}>Payment Date</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.Month}>
  <TableCell>{row.Month}</TableCell>
  <TableCell>{row.Due_date}</TableCell> 
  <TableCell align="center">{row.Monthly_Fees}</TableCell>
  <TableCell align="center">{row.Paid}</TableCell>
  <TableCell align="center">{row.Pending}</TableCell>
  <TableCell align="center">
    <Button
      variant="contained"
      size="small"
      sx={{
        backgroundColor: '#4caf50',
        '&:hover': { backgroundColor: '#43a047' },
      }}
    >
      Pay
    </Button>
  </TableCell>
  <TableCell>{row.Payment_date}</TableCell> {/* ✅ Show Payment Date */}
</TableRow>

      ))}
      <TableRow>
  <TableCell colSpan={4} >
   <Box sx={{ fontWeight: 'bold', textAlign: 'right', pr: 2 }}>
    Total Fee Pending Fees
  </Box>
  </TableCell>
  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
    {rows.reduce((acc, curr) => acc + curr.Monthly_Fees, 0)}
  </TableCell>
  <TableCell colSpan={4} />
</TableRow>

    </TableBody>
  </Table>
</TableContainer>


  </>
  );
}
