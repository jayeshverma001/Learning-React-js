import React from 'react';
import '../styles/landingscreen.css';
import ListGroup from 'react-bootstrap/ListGroup';

function Landingscreen() {
    return (
        // <div className='landingdiv'>
            <div className='row landingdiv'>
                <div className='col-lg-6 col-lg -offset-3'>
                    <div className='landingcol'>
                        <h2>Notice Board</h2>
                        <ListGroup className='listgp'>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='landingcol'>
                        <h2>Career Counselling</h2>
                        <ListGroup  className='listgp'>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Landingscreen;






// import React from 'react';
// import '../styles/landingscreen.css';

// function Landingscreen() {
//     return (
//         // <div className='landingdiv'>
//             <div className='landing-div'>
//                 <div className='nbdiv'>
//                     <div className='row landing-col'>
//                         <div className='col-lg-2'>
//                             <h2 className='kl'>Notice Board</h2>
//                         </div>
//                         <div className='col-lg-10'>
//                             <p class="marquee list-gp">
//                                 <span>Cras justo odio - Dapibus ac facilisis in - Morbi leo risus - Porta ac consectetur ac - Vestibulum at eros </span>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         // </div>
//     )
// }

// export default Landingscreen;


// {/* <p class="marquee marquee2">
// <span>This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text -&nbsp;</span>
// </p> */}