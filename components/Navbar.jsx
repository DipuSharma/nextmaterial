import React from "react";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Link from "next/link";
import Menu from '@mui/material/Menu';
import { Login, Dashboard, Logout } from "@mui/icons-material";
import DrawerComponent from "./Drawer";

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(5),
//     display: "flex",
//   },
//   logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }));

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{color:"black", backgroundColor:"White" }}
      >
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" >
          Dipu
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', flexGrow: '1' }}>
              <Typography sx={{ minWidth: 100 }}><Link href={'/'}>Home</Link></Typography>
              <Typography sx={{ minWidth: 100 }}><Link href={'/src/allproduct'}>All Product</Link></Typography>
              <Typography sx={{ minWidth: 100 }}><Link href={'/src/electronics'}>Mobile</Link></Typography>
              <Typography sx={{ minWidth: 100 }}><Link href={'/src/fashion'}>Fashion</Link></Typography>
              <Typography sx={{ minWidth: 100 }}><Link href={'/src/grocery'}>Grocery</Link></Typography>
            </Box>
            <Button variant='text' color='inherit' startIcon={<Login />}>Sign In</Button>
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
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Link onClick={handleClose} href={'/'}><Typography sx={{ minWidth: 150, padding: 1 }}>Profile</Typography></Link>
              <Link onClick={handleClose} href={'/src/profile'}><Typography sx={{ minWidth: 150, padding: 1 }}>My Account</Typography></Link>
              <Button onClick={handleClose} startIcon={<Logout />} sx={{ minWidth: 150, padding: 1 }}>Logout</Button>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;