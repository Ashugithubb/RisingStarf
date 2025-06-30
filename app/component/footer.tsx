'use client'
import { Box, Typography, Container } from '@mui/material';
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#f5f5f5' : '#1a1a1a',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Ashutosh
        </Typography>
      </Container>
    </Box>
  );
}
