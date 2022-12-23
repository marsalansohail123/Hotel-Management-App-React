import React, { useState, useEffect } from 'react'

import DrawerAppBar from '../components/Navbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ReadData } from '../config/firebasemethod';
import { useNavigate } from 'react-router-dom';

const Rooms = () => {
    const [roomData, setRoomData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        ReadData('add room')
            .then((res) => {
                setRoomData(Object.values(res))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const more = (e) => {
        navigate('/roomdetails', {
            state: e
        }
        )
    }

    return (
        <>
            <DrawerAppBar />
            <div style={{ marginTop: '25px' }} className='container'>
                <div className='d-flex justify-content-center'>
                    <TextField id="standard-basic" label="Search Room" variant="standard" />
                    <Button variant="outlined" className='ms-3'>Search</Button>
                </div>
                <div className='m-5'>
                    <h1>Rooms</h1>
                    <div className='row m-5'>
                        {
                            roomData.map((e, i) => (
                                <div key={i} className='mb-5 col-md-6'>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardHeader
                                            title={e.roomName}
                                            subheader={e.date}
                                        />
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={e.mainImage}
                                            alt="Paella dish"
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {e.description}
                                            </Typography>
                                        </CardContent>
                                        <Typography variant="h6" className='mx-3' color="text.secondary">
                                            Price: {e.price}/- per day
                                        </Typography>
                                        <CardActions style={{ float: 'right', margin: 10 }} disableSpacing>
                                            <button className='btn btn-outline-secondary' onClick={() => more(e)}>Room Details</button>
                                        </CardActions>
                                    </Card>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rooms;