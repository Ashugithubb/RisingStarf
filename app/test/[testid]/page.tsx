import { Typography, Box, Button, Paper } from "@mui/material";

export default function TestDescription() {
  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        p: 3,
        maxWidth: 600,
        margin: 'auto',
        mt: 4,
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Physics Test - Chapter 1
      </Typography>
      <Typography variant="body1" gutterBottom>
        This test covers the fundamental concepts of motion, including speed, velocity, and acceleration.
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Duration: 45 minutes
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Total Questions: 20
      </Typography>

      <Button
        variant="contained"
        color="success"
        sx={{ ml: 55 ,mt: 3 }}
      >
       Continue
      </Button>
    </Box>
  );
}
