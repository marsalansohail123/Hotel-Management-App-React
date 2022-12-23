import React, { useState } from 'react'

import ResponsiveAdminAppBar from '../../components/Admin Components/AdminNavbar';

import { TextField } from '@mui/material';
import { AddRoomDb } from '../../config/firebasemethod';

const AddRoom = () => {

    const [roomData, setRoomData] = useState({});

    const addRoom = () => {
        if (Object.values(roomData).length >= 10) {
            AddRoomDb(roomData)
                .then((success) => {
                    alert(success)
                    // setRoomData("");
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            alert("Must Fill All Fields")
        }
    }
    return (
        <>
            <ResponsiveAdminAppBar />
            <div className='container'>
                <h1 className='m-5'>Add Room</h1>
                <div className="row m-5">
                    <div className="col-md-4"><TextField onChange={(e) => setRoomData({ ...roomData, roomName: e.target.value })} id="outlined-basic" label="Room Name*" variant="outlined" /></div>
                    <div className="col-md-4"><TextField onChange={(e) => setRoomData({ ...roomData, price: e.target.value })} id="outlined-basic" type='number' label="Price*" variant="outlined" /></div>
                    <div className="col-md-4"><TextField onChange={(e) => setRoomData({ ...roomData, personAllowed: e.target.value })} id="outlined-basic" label="Person Allowed*" type='number' variant="outlined" /></div>
                    <div className="col-md-12"><TextField onChange={(e) => setRoomData({ ...roomData, description: e.target.value })} style={{ width: '100%', marginTop: 20 }} id="outlined-basic" label="Description*" variant="outlined" /></div>
                    <div className="col-md-12 mt-4">
                        <h4>Images ~In Url.</h4>
                    </div>
                    <div className="col-md-4"><TextField onChange={e => setRoomData({ ...roomData, mainImage: e.target.value })} style={{ marginTop: 20 }} id="outlined-basic" label="Main Image*" variant="outlined" /></div>
                    <div className="col-md-4"><TextField onChange={e => setRoomData({ ...roomData, backImage1: e.target.value })} style={{ marginTop: 20 }} id="outlined-basic" label="Back Image 1*" variant="outlined" /></div>
                    <div className="col-md-4"><TextField onChange={e => setRoomData({ ...roomData, backImage2: e.target.value })} style={{ marginTop: 20 }} id="outlined-basic" label="Back Image 1*" variant="outlined" /></div>
                    <div className="col-md-12 mt-4">
                        <h4>Answer These Three Fields in Yes or No.</h4>
                    </div>
                    <div className="col-md-4"><TextField onChange={e => setRoomData({ ...roomData, food: e.target.value })} style={{ marginTop: 20 }} id="outlined-basic" label="Include Food*" variant="outlined" /></div>
                    <div className="col-md-4"><TextField onChange={e => setRoomData({ ...roomData, pets: e.target.value })} style={{ marginTop: 20 }} id="outlined-basic" label="Pet Allowed*" variant="outlined" /></div>
                    <div className="col-md-4"><TextField style={{ marginTop: 20 }} id="outlined-basic" onChange={e => setRoomData({ ...roomData, massage: e.target.value })} label="Massage*" variant="outlined" /></div>
                    <div className="col-md-12"><TextField onChange={e => setRoomData({ ...roomData, extras: e.target.value })} style={{ width: '100%', marginTop: 20 }} id="outlined-basic" label="Extras (if) seperated by commas" variant="outlined" /></div>
                    <div className="col-md-12">
                        <button onClick={addRoom} className='btn btn-success mt-4 w-100'>Add Room</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddRoom;