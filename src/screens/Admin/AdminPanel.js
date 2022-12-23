import React from 'react'
import ResponsiveAdminAppBar from '../../components/Admin Components/AdminNavbar';

import Image from '../../images/AdminPic1.jpg'

const AdminPanel = () => {
    return (
        <>
            <div>
                <ResponsiveAdminAppBar />
                <img src={Image} style={{ height: '90vh', width: '100vw' }} />
            </div>
        </>
    )
}

export default AdminPanel;