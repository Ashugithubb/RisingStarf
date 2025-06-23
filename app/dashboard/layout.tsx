import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Box sx={{
                backgroundColor: '#34a0a4'
            }}>
                {children}
            </Box>
        </>
    )
}