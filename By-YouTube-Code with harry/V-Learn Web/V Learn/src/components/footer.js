import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import { footerdata } from './data';

function Footer() {
    return (
        <div className='fdiv'>
            <div className='row footer-div'>
                <div className='col-lg-4 col-sm-12'>
                    <div className='footsubdiv'>
                        <Link to="/">
                            <p className='footer-brand'>V Learn</p>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <div className='footsubdiv'>
                        <p className='footer-label'>EXPLORE</p>
                            {footerdata.map((item) => {
                                return(
                                    <Link to={item.linkto}>
                                        <p className='footer-links'>{item.link}</p>
                                    </Link>
                                )
                            })}
                    </div>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <div className='footsubdiv'>
                        <p className='footer-label'>Contact Information</p>
                        <p className='footer-links-two'>djkbdsbbmdhs</p>
                        <p className='footer-links-two'>4665844535</p>
                        <p className='footer-links-two'>ncnvbdhj@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
