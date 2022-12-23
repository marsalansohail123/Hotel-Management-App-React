import React from "react";
import { useLocation } from "react-router-dom";
import '../App.css'
import DrawerAppBar from "../components/Navbar";

const SingleRooms = () => {

    const location = useLocation();
    const data = location.state;

    return (
        <div className="Dmain">
            <DrawerAppBar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <img src={data.mainImage} style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="col-md-4">
                        <div className="text-center mt-5">
                            <h1>{data.roomName}</h1>
                            <h4>{data.description}</h4>
                            <p>{data.date}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center mt-5">
                            <h1>Rs: {data.price}/-pkr Per Day</h1>
                            <h4>{data.personAllowed} Person Allowed</h4>
                        </div>
                    </div>
                    <div className="col-md-8 mt-5">
                        <img src={data.backImage1} style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="col-md-8 mt-5">
                        <img src={data.backImage2} style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="col-md-4">
                        <div className="text-center mt-5">
                            <h4>Include Free Food: {data.food ?? "No"}</h4>
                            <h4>Include Free Massage: {data.massage}</h4>
                            <h4>Pets Allowed: {data.pets}</h4>
                            <h1>Extras: {data.extras}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-5">
                    <button className="btn btn-outline-primary mb-3 w-100">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
};
export default SingleRooms;