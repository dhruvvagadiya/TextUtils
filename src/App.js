import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState("light");
  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils - Dark Mode';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setmode('light');
      document.title = 'TextUtils - Light Mode';
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  const [alert, setalert] = useState(null)

  const showAlert = (messege, type) =>{
    setalert({
      messege : messege,
      type : type
      }
    )

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  return (
    <>
      <Router>
      <Navbar title="MyApp" aboutText = "About" mode = {mode} toggleMode={toggleMode} ></Navbar>
      <Alert alert = {alert}/>

        <div className="container my-3">
        {/* <Textform title = "Enter text to analyze below" mode = {mode} alert = {showAlert}></Textform> */}
        <Routes>
          <Route exact path="/about" element={<About mode = {mode}/>} />
          <Route exact path="/" element={<Textform title = "Enter text to analyze below" mode = {mode} alert = {showAlert}></Textform>} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
