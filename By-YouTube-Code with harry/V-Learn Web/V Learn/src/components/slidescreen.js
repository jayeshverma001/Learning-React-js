import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/slidescreen.css';
// import { Button} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import slidedata from './data';

function Slidescreen() {
    return (
        <div className='slidescreendiv row'>
            {/* <div className='slidediv col-lg-6'> */}
            <div className='slidediv'>
                <Carousel fade>
                    {slidedata.map((item) => {
                        return(
                            <Carousel.Item>
                              <img className='slide-img' src={item.img} alt="SlideImage" />
                              <Carousel.Caption>
                                   <h3>{item.title}</h3>
                                   <p>{item.caption}</p>
                              </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
            {/* <div className='slidetext col-lg-6'>
                <p className='label'>HI I'M SANDRA LYONS</p>
                <h1>Your go to online fitness trainer and nutritionist.</h1>
                <p className='para'>After getting a bachelors in nutrition and fitness training I started working with people all around and changing their lives forever.</p>
                <Link to="/aboutus">
                  <Button className='slidebtn' variant="primary" type="submit">
                    Read More About us
                  </Button>
                </Link>
            </div> */}
        </div>
    )
}

export default Slidescreen;
