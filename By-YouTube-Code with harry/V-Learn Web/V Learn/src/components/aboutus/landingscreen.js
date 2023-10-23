import React from 'react';
import '../../styles/aboutus.css';
import Card from 'react-bootstrap/Card';
import { teamdata } from '../data';
import AboutImg from '../../Images/aa.jpg';

function Landingscreen() {
    return (
        <div className='aboutdiv'>
            <img className='aboutimg' src={AboutImg} alt='aboutus-img' />
            <div className='textdiv'>
                <h2>How does online fitness coaching work ?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve
                </p>
            </div>
            <div className='team-div'>
                <h2>Our Team</h2>
                {
                  teamdata.map((item) => {
                    return(
                      <Card className='aboutcard'>
                        <Card.Img className='aboutcard-img' src={item.img} />
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>{item.role}</Card.Text>
                        </Card.Body>
                      </Card>
                    );
                  })
                }
            </div>
        </div>
    )
}

export default Landingscreen;
