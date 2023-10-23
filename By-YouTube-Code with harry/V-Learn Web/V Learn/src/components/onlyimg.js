import React from 'react';
import OnlyImg from '../Images/3.jpg';
import '../styles/services.css';

function Onlyimg() {
    return (
        <div className='imgdiv'>
          <img className='imgdivimg' src={OnlyImg} alt='imgservice' />
          <p class="marquee list-gp">
          <span className='hide'>Get Ready to Chase Your Dreams</span>
        </p>
        </div>
    )
}

export default Onlyimg;
