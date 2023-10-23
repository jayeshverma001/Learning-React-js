import '../App.css';
import DSLscreen from './dslscreen';
import Footer from './footer';
import Landingscreen from './landingscreen';
import Navmenu from './navmenu';
import Onlyimg from './onlyimg';
import Register from './register';
import Review from './review';
import Services from './services';
import Slidescreen from './slidescreen';

function Homescreen() {
  return (
    <div className="App row">
    <div className='subappdiv'>
      <Navmenu />
      <Slidescreen />
    </div>
      <Landingscreen />
      <DSLscreen />
      <Services />
      <Onlyimg />
      <Review />
      <Register />
      {/* <div className='col-lg-6'>
        <Register />
      </div>
      <div className='col-lg-6'>
        <ClientRegister />
      </div> */}
      {/* <div className="col-lg-9"> */}
        {/* <Services /> */}
        {/* <Review /> */}
      {/* </div> */}
      {/* <div className="col-lg-3 sidecol"> */}
        {/* <Register /> */}
        {/* <ClientRegister /> */}
      {/* </div>  */}
      <Footer />  
    </div>
  );
}

export default Homescreen;
