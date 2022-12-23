import Carousel from 'react-bootstrap/Carousel';

import Hotel1 from '../images/hotel-1.webp';

function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Hotel1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>5 Star Hotel Review</h3>
                    <p>Our Luxourious Room with Approximately all Facilities.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://pix10.agoda.net/hotelImages/569439/-1/f91da57aad28a4a3ccdf3631fb287743.jpg?ca=16&ce=1&s=1024x768"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>5 Star Hotel Review</h3>
                    <p>Swimming Area.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://profiles.pk/wp-content/uploads/2018/01/marco-polo2.jpg "
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>5 Star Hotel Review</h3>
                    <p>
                        Dinnning Area with a Variety of Foods.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;