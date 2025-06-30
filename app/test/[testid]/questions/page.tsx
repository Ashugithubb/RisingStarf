'use client'
import Questions from "@/app/component/question";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import { useEffect, useState } from "react";


export default function Test() {
    const [timeLeft, setTimeLeft] = useState(60); // 60 seconds

    useEffect(() => {
        if (timeLeft === 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer); // Cleanup
    }, [timeLeft]);

    // Format seconds as mm:ss
    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60)
            .toString()
            .padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", border: "2px", borderRadius: "2px", background: "" }}>
                <Typography variant="h5" color="secondary">Physics Test 1</Typography>
                <Typography variant="h6" color={timeLeft <= 10 ? 'error' : 'primary'}>
                    Time Remaining: {formatTime(timeLeft)}
                </Typography>
            </Box>
            
            <Questions
                question="What is the SI unit of Magnetic Flux?"
                options={["Faraday", "Am", "Gauss", "Weber"]}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained" color="primary">prev</Button>
                <Button variant="contained" color="primary">next</Button>
            </Box>
            <Button
                variant="contained"
                color="error"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    right: 20,
                    zIndex: 1000, // so it stays above other elements
                    borderRadius: "8px",
                    boxShadow: 3,
                }}
            >
                End Test
            </Button>

        </>
    )
}