import '../App.css';

import DrawerAppBar from '../components/Navbar';
import UncontrolledExample from '../components/Carousel';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Phone from '@mui/icons-material/Phone';
import MailLock from '@mui/icons-material/MailLock';

import facilities1 from '../images/facilities-1.jpg'
import facilities2 from '../images/facilities-2.jpg'
import facilities3 from '../images/facilities-3.jpg'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigation = useNavigate();

    return (
        <>
            <DrawerAppBar />
            <UncontrolledExample />

            <div className="container">
                <div className="m-5">
                    <h1>About Our Hotel</h1>
                    <p className='m-5' style={{ textAlign: 'justify' }}>
                        <dfn>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum deleniti similique dolore mollitia odit magnam earum exercitationem corrupti eos perspiciatis tenetur ducimus nisi neque impedit magni esse, cum officia, error iste deserunt consequuntur eius incidunt. Reiciendis explicabo blanditiis, sit rem at neque facilis beatae ipsum vel aliquam distinctio nesciunt, veniam consequuntur cupiditate fugit necessitatibus debitis commodi eligendi ipsa possimus provident excepturi quisquam ut dignissimos. Voluptatem, maiores? Itaque nihil officia delectus? Quaerat officiis maiores dicta, alias cupiditate illum nisi, praesentium accusamus atque, veritatis a itaque? Porro omnis nesciunt ad laborum odio architecto recusandae quas, consequuntur quibusdam iste dolores quo error, modi fugiat? Ipsa magnam nisi, ab culpa sint cupiditate! Nulla, minima, molestias doloremque et dignissimos ab laboriosam deleniti porro possimus, officiis id ipsam optio quis dolorem ipsum voluptatum sapiente quisquam laborum. Harum repellendus quam nesciunt eos qui tempore reprehenderit excepturi impedit dicta ullam architecto, fugit magni in aperiam, asperiores esse, obcaecati natus sint quo officiis est corporis porro illo voluptatem. Quas illo tenetur architecto, eaque quos quod eligendi unde aut nam incidunt repellendus deserunt ex accusantium qui cupiditate illum earum, aperiam dicta, odio totam quisquam autem nostrum necessitatibus! Error, similique! Cumque sunt amet magnam laborum sint libero magni et corrupti.
                        </dfn>
                    </p>
                </div>
            </div>

            <div className='container'>
                <div className='m-5'>
                    <h1>Hotel Details</h1>
                </div>
                <div className='row m-5'>
                    <div className="col-md-3">
                        <h3 className='text-secondary'>
                            No. of Rooms
                        </h3>
                        <h5 className='ms-3 text-primary'>150</h5>
                    </div>
                    <div className="col-md-3">
                        <h3 className='text-secondary'>
                            Lobby
                        </h3>
                        <h5 className='ms-3 text-primary'>Special</h5>
                    </div>
                    <div className="col-md-3">
                        <h3 className='text-secondary'>
                            Indoor Games
                        </h3>
                        <h5 className='ms-3 text-primary'>Available</h5>
                    </div>
                    <div className="col-md-3">
                        <h3 className='text-secondary'>
                            Parking
                        </h3>
                        <h5 className='ms-3 text-primary'>Available</h5>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='m-5'>
                    <h1>Facilities</h1>
                </div>
                <div className='row m-5 gap-5'>
                    <div className="card" style={{ width: '22rem' }}>
                        <img src={facilities1} style={{ height: '200px' }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Free Breafast, Lunch & Dinner.</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-primary" onClick={() => navigation('rooms')}>Details</button>
                        </div>
                    </div>
                    <div className="card" style={{ width: '22rem' }}>
                        <img src={facilities2} style={{ height: '200px' }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Free Body Massage.</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a onClick={() => navigation('rooms')} className="btn btn-primary">Details</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '22rem' }}>
                        <img src={facilities3} style={{ height: '200px' }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Pet's Allowed</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a onClick={() => navigation('rooms')} className="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="m-5">
                    <h1>Contact Us</h1>
                </div>

                <div className="container">
                    <div className="footer-cta m-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <span className='i'>
                                        <HomeIcon />
                                    </span>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <span className='i'>
                                        <Phone />
                                    </span>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <span className='i'>
                                        <MailLock />
                                    </span>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>mail@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-5'>
                    <div className="row">
                        <div className="col-md-6">
                            <TextField id="outlined-basic" label="Enter Your Name*" className='w-100' variant="outlined" />
                        </div>
                        <div className="col-md-6">
                            <TextField id="outlined-basic" label="Enter Your Email*" className='w-100' variant="outlined" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <TextField id="outlined-basic" label="Message (Optional)" className='w-100' variant="outlined" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-4">
                            <Button variant="outlined" style={{ float: 'right' }}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2022, All Right Reserved <a href="https://www.arovah.com/">&nbsp;Arovah Technologies</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;