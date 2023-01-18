import React, { useState } from "react";
import Link from "next/link";
import {
    Box,
    Menu,
    Button,
    Typography,
    Divider,
    Drawer,
    IconButton,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Login, Dashboard, Logout } from "@mui/icons-material";
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
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
                    <Button variant='text' color='inherit' startIcon={<Login />}>Sign In</Button>
                    <Divider />
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        color='inherit'
                        endIcon={<Dashboard />}
                    >
                        Dashboard
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        sx={{ display: 'flex', alignItems: 'center', ml: -2 }}
                    >
                        <Link onClick={handleClose} href={'/'}><Typography sx={{ minWidth: 150, padding: 1 }}>Profile</Typography></Link><Divider />
                        <Link onClick={handleClose} href={'/src/profile'}><Typography sx={{ minWidth: 150, padding: 1 }}>My Account</Typography></Link><Divider />
                        <Button onClick={handleClose} startIcon={<Logout />} sx={{ minWidth: 150, padding: 1 }}>Logout</Button>
                    </Menu>
                </ThemeProvider>
            </Drawer>
            <IconButton
                onClick={() => setOpenDrawer(!openDrawer)}
                sx={{ ml: 40, ...(open && { display: 'none' }) }}
                edge="start"
            >
                <MenuIcon />
            </IconButton>
        </>
    );
};