import './App.css';
import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './TextForm';
import  Alert  from './components/Alert';
// import About from './components/About';

function App() {
    const [alert, setAlert] = useState(null);
    const showalert = (message, type)=>{
      setAlert({
        msg : message,
        type : type,
    })
    setTimeout( ()=>{setAlert(null)},2000) 
  }
    const [mode,  setMode] = useState('light')
    const [btnmode, setBtnmode] = useState('Enable Dark mode')
    const darkMode = ()=>{
      if (mode === 'light') {
        setMode('dark')
        setBtnmode('Enable light mode')
        document.body.style.backgroundColor = 'gray';
        showalert(': Dark mode is enabled','success')
      }
      else {
        setMode('light')
        setBtnmode('Enable dark mode')
        document.body.style.backgroundColor = '#ffff';
        showalert(': Light mode is enabled','success')
      }
    }
    // const [modes,  setModes] = useState('light')
    // const [btnmodes, setBtnmodes] = useState('Enable red mode')
    // const redMode = ()=>{
    //   if (modes === 'light') {
    //     setModes('red')
    //     setBtnmodes('Enable light mode')
    //     document.body.style.backgroundColor = 'red';
    //     showalert(': Red mode is enabled','success')
    //   }
    //   else {
    //     setModes('light')
    //     setBtnmodes('Enable red mode')
    //     document.body.style.backgroundColor = '#ffff';
    //     showalert(': Red mode is enabled','danger')
    //   }
    // }
  return (
    
    <div>
      {/* <Router> */}
        <Navbar
        title="TextUtils"
        title2="About"
        mode={mode}
        btnmode={btnmode}
        darkMode={darkMode}
      />
      <div className="container">

     
      <TextForm showalert={showalert} heading="New Text To Analayse" mode={mode} />
       </div>
      <Alert alert={alert} />
      {/* <div className="container">
      <Routes>
          <Route exact path="/" element={<TextForm showalert={showalert} heading="New Text To Analayse" mode={mode} />}/>
          <Route exact path="/about" element={<About/>} />
        </Routes>  
        </div>  */}
      {/* </Router> */}
    </div>
  );

}

export default App;
