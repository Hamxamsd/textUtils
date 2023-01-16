// import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1000);
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "sucess");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "sucess");
      document.title = 'TextUtils - Light Mode';


    }
  }
  
  return(
    <>
{/* // <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
 {/* <Routes> */}
         {/* <Route exact path="/about" element = {<About />}/>
               <Route exact path="/" element =  */}
              {<TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>}/>
             {/* </Routes> */}
</div>
{/* </Router> */}
</>
  );
}

export default App;
