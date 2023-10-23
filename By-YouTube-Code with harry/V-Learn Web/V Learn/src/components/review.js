import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../styles/review.css';
import { reviewdata } from './data';

function Review() {
    return (
        <div class="reviewdiv">
        <h2>Read what our employees think about us</h2>
            <div class="reviewsubdiv">
                <OwlCarousel className="owl-theme" loop nav>
                    {reviewdata.map((item) => {
                        return(
                            <div class="item">
                                <img className='rev-img' src={item.img} alt="review images" />
                                <div class="card card-block rev-card">
                                   <div className='revtext'>
                                        <p className='name'>{item.name}</p>
                                        <p>{item.review}</p>
                                    </div>
                                </div>
                            </div>
                          );
                      })}
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Review;

