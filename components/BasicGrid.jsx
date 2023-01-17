import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Box,
    IconButton,
    CardMedia,
    Divider
} from "@mui/material";
import { Favorite, StarRate } from '@mui/icons-material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={2}>
                    <Item sx={{ backgroundColor: "maroon", margin: 2 }}>
                        <Card sx={{ maxWidth: 600 }}>
                            <CardMedia component="img"
                                image="/img/8JIWpnw.jpg"
                                alt="Paella dish"
                                sx={{}}
                            />
                            <CardContent>
                                <Typography>Product 1</Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="add to favorites">
                                    <Favorite />
                                </IconButton>
                                <Button size="small">Card Button</Button>
                            </CardActions>
                        </Card>
                    </Item>
                    <Item sx={{ backgroundColor: "white", margin: 2, display: "flex", alignItems: "center", justifyContent: "center", color: "black" }}>
                        <Typography>Coupon code</Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography>Offer</Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Item sx={{ backgroundColor: "maroon", margin: 2 }}>
                        <Card sx={{ maxWidth: 600 }}>
                            <CardMedia component="img"
                                image="/img/8JIWpnw.jpg"
                                alt="Paella dish"
                                sx={{}}
                            />
                            <CardContent>
                                <Typography>Product 1</Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="add to favorites">
                                    <StarRate />
                                </IconButton>
                                <Button size="small">Card Button</Button>
                            </CardActions>
                        </Card>
                    </Item>
                    <Item sx={{
                        backgroundColor: "white",
                        margin: 2,
                        display: 'flex',
                        borderRadius: 1,
                        color: "black",
                        alignItems: "center", justifyContent: "center",
                    }}>
                        <Typography>Coupon code</Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography>Offer</Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Item sx={{ backgroundColor: "maroon", margin: 2 }}>xs=3</Item>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Item sx={{ backgroundColor: "maroon", margin: 2 }}>xs=3</Item>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Item sx={{ backgroundColor: "maroon", margin: 2 }}>xs=3 </Item>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Item sx={{ backgroundColor: "maroon", margin: 2 }}>xs=3 </Item>
                </Grid>
            </Grid>
        </Box>
    );
}