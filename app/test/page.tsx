'use client';
import React from 'react';
import {
  Box,
  Paper,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import ResponsiveAppBar from '../component/navbar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const rows = [
  { rank: 1, name: 'Aman', marks: 98 },
  { rank: 2, name: 'Priya', marks: 96 },
  { rank: 3, name: 'Raj', marks: 94 },
];

export default function Tests() {
  return (
    <>
      <ResponsiveAppBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: '100vh',
          justifyContent: "space-between",
          background: 'linear-gradient(to right, #fdfbfb, #ebedee)',
          py: 5,
          px: 2,
          fontFamily: 'Poppins, sans-serif',
          gap: "3"
        }}
      >


        <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
          <Paper
            elevation={6}
            sx={{
              p: 3,
              borderRadius: 3,
              background: '#e3f2fd',
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              📝 Upcoming Tests
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6" color="text.secondary" mb={2}>
                Physics Unit3 Test {new Date().toLocaleString()}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size='small'
                sx={{ borderRadius: 2, width: "45px", height: "25px", marginLeft: "5px", marginTop: "6px" }}
              >
                Start
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
          <Paper
            elevation={6}
            sx={{
              p: 3,
              borderRadius: 3,
              background: '#e3f2fd',
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              📝 Recent Attempted Tests
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6" color="text.secondary" mb={2}>
                Physics Unit2 Test {new Date().toLocaleString()}
              </Typography>
              <Button
                variant="contained"
                color="info"
                size='small'
                sx={{ borderRadius: 2, width: "45px", height: "25px", marginLeft: "5px", marginTop: "6px" }}
              >
                check
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Paper
          elevation={6}
          sx={{
            p: 3,
            borderRadius: 3,
            background: '#ffe5ec',
            justifyContent: "center",
            alignItems: "center",
            height:"400px"
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            <EmojiEventsIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
            Last Test Rankings
          </Typography>

          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#ffb3c1' }}>
                  <TableCell><strong>Rank</strong></TableCell>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell><strong>Marks</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.rank}
                    sx={{
                      backgroundColor: row.rank === 1 ? '#c8f7c5' : 'inherit',
                    }}
                  >
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
