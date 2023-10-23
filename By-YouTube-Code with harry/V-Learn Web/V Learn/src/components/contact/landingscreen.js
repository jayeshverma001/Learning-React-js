import React from 'react';
// import ContactImg from '../../Images/contact.jpg';
import '../../styles/contact.css';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import contact from '../../Images/c.jpg';

function Landingscreen() {

    return (
        <div className='contactdiv'>
            {/* <img className='contact-img' src={ContactImg} alt='contact-img'/> */}
            <a href='https://www.freepik.com/vectors/business'>
            <img className='contact-img' src={contact} alt='contact-img' /></a>
            <div className='row contactsubdiv'>
                <div className='col-lg-6 contactcolone'>
                    <Form>
                        <Form.Group md="4" className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>
                        <Form.Group md="4" className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="number" placeholder="Your Phone" />
                        </Form.Group>
                        <Form.Group md="4" className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Your Website" />
                        </Form.Group>
                        <Form.Group md="4" className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control as="textarea" placeholder="Your Message" style={{ height: '100px' }} />
                        </Form.Group>
                        <Button className='contactbtn' variant="primary" type="submit">
                            Submit 
                        </Button>
                    </Form>
                </div>
                <div className='col-lg-6 contactcoltwo'>
                <h2>Contact Information</h2>
                <p><bold>Address:</bold> Dhbhjgjy, Tuihiu GYUguj, Jghgf Ykj, Ohjgfh Yhjvj, Jkjih, Efrgfhcvg, IN 543543</p>
                <p><bold>Phone:</bold>  +91-3545-21245353</p>
                <p><bold>Email:</bold> noreply@vlearn.co.in</p>
                <p><bold>Website:</bold> http://vlearn.co.in/</p>
                </div>
            </div>
        </div>
    )
}


export default Landingscreen;
