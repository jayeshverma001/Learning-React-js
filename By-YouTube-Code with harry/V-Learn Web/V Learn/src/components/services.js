import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/services.css';
import { Link } from 'react-router-dom';
import { servicedata } from './data';

function Services() {
    return (
        <div className='servicesdiv'>
          <h2>The journey to a healthier body starts right now</h2>
          <div className='row servicesubdiv'>
            {servicedata.slice(0,2).map((item) => {
                return(
                  <div className='sdiv col-lg-6'>
                    <img className='s-img' src={item.img} alt='service-img'/>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  );
              })}
          </div>
          <Link to="/services">
            <Button className='servicebtn' variant="primary" type="submit">
                VIEW ALL SERVICES
            </Button>
          </Link>
        </div>
    )
}

export default Services;



