import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Home from './Components/Pages';
import SigninPage from './Components/Pages/signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route  exact path = '/' element= {<Home/>}  />
        <Route  exact path = '/signin' element= {<SigninPage/>}/>
      </Routes>
    
    </Router>
  );
}

export default App;
