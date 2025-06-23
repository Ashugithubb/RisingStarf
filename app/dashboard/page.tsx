import React from 'react';
import ResponsiveAppBar from '../component/navbar';
import Footer from '../component/footer';
import { Card, Box, Typography, CardContent, Stack } from '@mui/material';
import { Button } from '@mui/joy';
import { Title } from '@mui/icons-material';

function Dashboard() {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <ResponsiveAppBar />
           
            {/* Main content area */}
            <Box sx={{ flex:1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Card sx={{ width: '30vh', height: '20vh' }}>
             <Typography variant="subtitle1">
               Annoucment <br></br>
            Tomorrow Tuition Timming 5:00pm
                </Typography></Card>
                <Typography sx={{color:"yellow",fontSize:"40px", fontWeight:"40"}}>Hello Rising Stars</Typography>
                <Card sx={{ width: '30vh', height: '20vh' }}>
                    <CardContent>
                        <Stack spacing={2} alignItems="center">
                            <Typography variant="subtitle1">Join WhatsApp Group</Typography>
                            <Button sx={{ backgroundColor: 'green', color: 'white' }}>
                                12th Class
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>

            </Box>

            <Footer />
        </Box>
    );
}

export default Dashboard;

