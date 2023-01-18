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
    CardMedia,
} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Favorite, StarRate } from '@mui/icons-material';
import { green, pink } from '@mui/material/colors';
import StarRateIcon from '@mui/icons-material/StarRate';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={2}>
                    <Item sx={{ backgroundColor: "maroon", margin: 2 }}>
                        <Card sx={{ maxWidth: 600, position: "relative" }}>
                            <div className="first">
                                <Typography sx={{ ml: 0, justifyContent: "between", alignItem: "center", display: "flex" }}><span className="discount" >-25%</span><span className='wishlist'><Favorite /></span></Typography>
                            </div>
                            <CardMedia component="img"
                                image="/img/8JIWpnw.jpg"
                                alt="Paella dish"
                                sx={{}}
                            />
                            <CardContent>

                            </CardContent>
                            <CardContent sx={{ display: "flex" }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    sx={{ flexGrow: '1', }}
                                >
                                    <FormControlLabel className='radio-button' value="green" control={<Radio sx={{
                                        color: "green", '&.Mui-checked': {
                                            color: green[600],
                                        },
                                    }} />} label="" sx={{ color: "green" }} />
                                    <FormControlLabel className='radio-button' value="red" control={<Radio sx={{
                                        color: "red", '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }} />} label="" sx={{ color: "red" }} />
                                    <FormControlLabel className='radio-button' value="yellow" control={<Radio sx={{
                                        color: "yellow", '&.Mui-checked': {
                                            color: 'yellow',
                                        },
                                    }} />} label="" sx={{ color: "yellow" }} />
                                </RadioGroup>
                                <RadioGroup row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group">
                                    <Typography variant='h6' sx={{ paddingTop: 1, }}><span className="item-size">S</span></Typography>
                                    <Typography variant='h6' sx={{ paddingTop: 1, }}><span className="item-size">M</span></Typography>
                                    <Typography variant='h6' sx={{ paddingTop: 1, }}><span className="item-size">L</span></Typography>
                                </RadioGroup>
                            </CardContent>
                            <CardActions>
                                <span style={{color:'red', marginLeft:0, position:'relative'}}>4.2</span>
                                <StarRateIcon size='warning' color='yellow' sx={{flexGrow: '.5'}}/>
                                <Button size="small"><LocalMallIcon /></Button><Button size="small"><AddShoppingCartIcon /></Button>
                            </CardActions>
                        </Card>
                    </Item>
                    <Item sx={{
                        backgroundColor: "transparent",
                        margin: 2, display: "flex",
                        color: "black",
                        height: 70,
                    }} elevation={4}>
                        <Card sx={{
                            backgroundColor: "white",
                            height: 70,
                        }}
                            className='card-left'
                        >
                            <Typography variant='caption' sx={{ display: "flex" }}>Monday Happy</Typography>
                            <Typography variant='button' sx={{ color: "red" }}>#MONHPY</Typography>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "purple",
                                height: 70,
                                flexGrow: '1',
                            }}
                            className='card-right'
                        >
                            <Typography variant="caption" display="block">20%</Typography>
                            <Typography variant="caption" display="block">off</Typography>
                        </Card>
                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}