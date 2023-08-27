import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light'); 
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","suscess");
      document.title = 'Textutlis - Dark Mode';
      // setInterval(() => {
      //   document.title= 'Textutlis is amazing mode';
      // },2000);
      // setInterval(() => {
      //   document.title= 'install Textutlis Now';
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","suscess");
      document.title = 'Textutlis - light Mode';
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About textutlis" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
