'use client'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ResponsiveAppBar from "../component/navbar";
const rows = [
  { rank: 1, name: 'Aman', marks: 98 },
  { rank: 2, name: 'Priya', marks: 96 },
  { rank: 3, name: 'Raj', marks: 94 },
];
export default function Tests() {
  return (
    <>
    <ResponsiveAppBar/>
    <Box sx={{display:"flex",direction:"row",justifyContent:"space-between"}} >
      <Paper square variant="outlined" elevation={10} sx={{width:"500px", height:"600px", background:"#ffe5ec",p:3, mt:5}}>All Test
        <Typography>Physics Unit 3 Test {new Date().toLocaleString()}</Typography>
      </Paper>

      <Paper elevation={3} variant="outlined" sx={{width:"500px", height:"600px",background:"#ffe5ec",p:3,mt:5}}>Last Test Rank
         <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Marks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.rank}>
              <TableCell>{row.rank}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.marks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Paper>
      </Box>
    </>
  );
}
