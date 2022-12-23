import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRoom from '../screens/Admin/AddRoom';
import Admin from '../screens/Admin/Admin';
import AdminPanel from '../screens/Admin/AdminPanel';
import Home from '../screens/Home';
import RoomDetail from '../screens/RoomDetail';
import Rooms from '../screens/Rooms';

const AppRoutering = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/rooms' element={<Rooms />} />
                    <Route path='/roomdetails' element={<RoomDetail />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/adminpanel' element={<AdminPanel />} />
                    <Route path='/addroom' element={<AddRoom />} />
                </Routes>
            </Router>
        </>
    )
}

export default AppRoutering;