import React from 'react';
// import Button from 'react-bootstrap/Button';
import '../../styles/services.css';
// import { Link } from 'react-router-dom';
import { servicedata } from '../data';
import Navmenu from '../navmenu';
import Footer from '../footer';

function Services() {
    return (
    <div>
        <Navmenu />
        <img className='serviceimg' src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VydmljZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='service-img' />
        <div className='servicesdiv'>
          <h2>The journey to a healthier body starts right now</h2>
          <div className='row servicesubdiv'>
            {servicedata.map((item) => {
                return(
                  <div className='sdiv col-lg-6'>
                    <img className='s-img' src={item.img} alt='service-img'/>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  );
              })}
          </div>
          {/* <Link to="/aboutus">
            <Button className='servicebtn' variant="primary" type="submit">
                VIEW ALL SERVICES
            </Button>
          </Link> */}
        </div>
        <Footer />
    </div>
    )
}

export default Services;



