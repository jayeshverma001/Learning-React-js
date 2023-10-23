import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/dslscreen.css';

function DSLscreen() {
    return(
        <div className='dsldiv'>
            <h4>DSL</h4>
            <div className='dslsubdiv'>
            <Carousel fade>
                <Carousel.Item>
                  <img className='dsl-img' src="https://i.pinimg.com/originals/ba/20/26/ba2026c572b2f52999c010c7bff093c9.jpg" alt="First slide" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="dsl-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9g7EbjAh_SXJvH80LQFJbyQ6uAbB879RLfQ&usqp=CAU" alt="Second slide" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="dsl-img" src="https://image.freepik.com/free-vector/blue-light-sparkles-background-with-copyspace_1017-20091.jpg" alt="Third slide" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="dsl-img" src="https://i.pinimg.com/originals/ba/20/26/ba2026c572b2f52999c010c7bff093c9.jpg" alt="Fourth slide" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="dsl-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9g7EbjAh_SXJvH80LQFJbyQ6uAbB879RLfQ&usqp=CAU" alt="Fifth slide" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="dsl-img" src="https://image.freepik.com/free-vector/blue-light-sparkles-background-with-copyspace_1017-20091.jpg" alt="Sixth slide" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="dsl-img" src="https://i.pinimg.com/originals/ba/20/26/ba2026c572b2f52999c010c7bff093c9.jpg" alt="Seventh slide" />
                </Carousel.Item>
                
                </Carousel>
        </div>
        </div>
    );
}

export default DSLscreen;


