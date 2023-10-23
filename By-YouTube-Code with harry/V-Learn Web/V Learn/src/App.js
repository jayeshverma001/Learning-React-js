import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/aboutus/about';
import Contact from './components/contact/contact';
import Homescreen from './components/homescreen';
import Pagenotfound from './components/pagenotfound';
import ScrollToTop from './components/scrolltotop/scrolltotop';
import Services from './components/services/services';

const App = () => {
  return (
    <Router>
    <ScrollToTop />
        <Routes>
          {/* <Route exact path="/vlearn" component={() => (<Navigate to='/' />)} /> */}
          <Route exact path="/" element={<Homescreen />}/>
          <Route path="/aboutus" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="*" element={<Pagenotfound />}/>
        </Routes>
    </Router>
  );
}

// GIt Add push
// git remote add origin https://github.com/simran606/vlearn.git
// git branch -M main
// git push -u origin main


export default App;