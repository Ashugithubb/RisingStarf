import React from 'react';
import ResponsiveAppBar from '../component/navbar';
import Footer from '../component/footer';
import { Card, Box, Typography, CardContent, Stack } from '@mui/material';
import { Button } from '@mui/joy';
import { Title } from '@mui/icons-material';

function Dashboard() {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ResponsiveAppBar />

            {/* Main content area */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap:"wrap" }}>
                <Card
                    sx={{
                        width: '30vh',
                        height: '20vh',
                        background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
                        boxShadow: 5,
                        borderRadius: 3,
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}
                >
                    <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
                        📢 Announcement
                    </Typography>
                    <Typography variant="subtitle2" sx={{ textAlign: 'center', mt: 1 }}>
                        🕖 Tomorrow’s tuition timing is <b>7:00 PM</b> <br /> Don’t be late!
                    </Typography>
                </Card>

                
                <Card
                    sx={{
                        width: '30vh',
                        height: '23vh',
                        background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
                        boxShadow: 5,
                        borderRadius: 3,
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Join WhatsApp Group 📲
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mt: 1, textAlign: 'center' }}>
                        Stay updated with class news
                    </Typography>
                    <Button
                     component="a"
                        href="https://chat.whatsapp.com/IWSAPr5gf9GEz57y0KWG2G" // replace with actual link
                        target="_blank"
                        sx={{
                            mt: 2,
                            backgroundColor: '#25D366',
                            color: 'white',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#1ebe5d',
                            },
                        }}
                    >
                        Join 12th Class
                    </Button>
                </Card>


            </Box>

            <Footer />
        </Box>
    );
}

export default Dashboard;

