import React from 'react';
import '../styles/register.css';
import Button from 'react-bootstrap/Button';

function Register() {
    return (
        <div>
            <div className='row registerdiv'>
                <div className='col-lg-6 mobfullview'>
                    <div className='subdiv'>
                        <h2>Register with us</h2>
                        <p className='listgp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve</p>
                        <Button href='https://docs.google.com/forms/d/e/1FAIpQLSdxWGLhgtAyqfa90tLRZpQXMvzd-NIQ8EKeF1zTGkTuqwmjnw/viewform?usp=sf_link' className='registerbtn' variant="primary">Register with us</Button>
                    </div>
                </div>
                <div className='col-lg-6 mobnoview'>
                    <div className='subimgdiv'>
                        <div className='service-bg'></div>
                        <img className='service-bg-img' src='https://etimg.etb2bimg.com/photo/75729614.cms' alt='registerimg' />
                    </div>
                </div>
            </div>

            <div className='row registerdiv'>
                <div className='col-lg-6 mobfullview'>
                    <div className='subdiv'>
                        <h2>Client register</h2>
                        <p className='listgp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve</p>
                        <Button href='https://docs.google.com/forms/d/e/1FAIpQLSdxWGLhgtAyqfa90tLRZpQXMvzd-NIQ8EKeF1zTGkTuqwmjnw/viewform?usp=sf_link' className='registerbtn' variant="primary">Client Register</Button>
                    </div>
                    </div>
                <div className='col-lg-6 mobnoview'>
                    <div className='subimgdiv'>
                        <div className='service-bg'></div>
                        <img className='service-bg-img' src='https://etimg.etb2bimg.com/photo/75729614.cms' alt='registerimg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;

