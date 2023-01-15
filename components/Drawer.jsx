import React, { useState } from "react";
import Link from "next/link";
import {
    Box,
    Typography,
    Divider,
    Drawer,
    IconButton,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Menu } from "@mui/icons-material";
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

export default function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                // sx={{ minWidth: 600 }}
            >
                <ThemeProvider theme={theme}>
                    <Box >
                        <Typography variant='h4' onClick={() => setOpenDrawer(false)} sx={{ minWidth: 100, padding: 1 }} >Navbar</Typography>
                        <Divider />
                        <Typography sx={{ minWidth: 150, padding: 1 }} bgcolor="secondary" color="secondary" onClick={() => setOpenDrawer(false)}><Link href={'/'}>Home</Link></Typography>
                        <Divider />
                        <Typography sx={{ minWidth: 150, padding: 1 }} onClick={() => setOpenDrawer(false)}><Link href={'/src/allproduct'}>All Product</Link></Typography>
                        <Divider />
                        <Typography sx={{ minWidth: 150, padding: 1 }} onClick={() => setOpenDrawer(false)}><Link href={'/src/electronics'}>Mobile</Link></Typography>
                        <Divider />
                        <Typography sx={{ minWidth: 150, padding: 1 }} onClick={() => setOpenDrawer(false)}><Link href={'/src/fashion'}>Fashion</Link></Typography>
                        <Divider />
                        <Typography sx={{ minWidth: 150, padding: 1 }} onClick={() => setOpenDrawer(false)}><Link href={'/src/grocery'}>Grocery</Link></Typography>
                        <Divider />
                    </Box>
                </ThemeProvider>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu />
            </IconButton>
        </>
    );
};