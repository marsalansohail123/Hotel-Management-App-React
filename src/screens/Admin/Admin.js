import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField } from '@mui/material';
import '../../App.css'

const Admin = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const adminAuth = () => {
        if (userName === "hoteladmin" && password === "admin@@") {
            alert('Successfully Logged in to Admin Panel');
            navigate('/adminpanel')
        } else {
            alert('Incorrect User Name or Password')
            console.log(userName, password)
        }
    }

    return (
        <div className="parent">
            <div className='main'>
                <section className='section'>
                    <h1 className='heading'>Hotel Login</h1>
                    <Box className='input'>
                        <TextField onChange={(e) => setUserName(e.target.value)} label="User Name" variant="filled" />
                    </Box>
                    <Box className='input'>
                        <TextField onChange={(e) => setPassword(e.target.value)} label="Password" type='password' variant="filled" />
                    </Box>
                    <Button variant="outlined" onClick={adminAuth}>Signup</Button>
                </section>
            </div>
        </div>
    )
}

export default Admin;