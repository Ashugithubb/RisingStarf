import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <Box
            sx={{
                backgroundImage: `url('/wall.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            {children}
        </Box>
    );
}
