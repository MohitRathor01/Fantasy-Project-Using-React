import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./component/Login"
import Register from "./component/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorNot from './component/ErrorNot';
import Header from './component/Header';
import Footer from './component/Footer';
import Firstpage from './component/Firstpage';
import { ToastContainer  } from 'react-toastify';
import Play from './Play';


ReactDOM.render(
  <><ToastContainer/>
  <BrowserRouter>
    <Header />
   
    <Routes>
      <Route path="/" element={<Firstpage/>} /> 
      <Route path="Register" element={<Register />} />
      <Route path="Login" element={<Login />} />
      <Route path="*" element={<ErrorNot />} />   
      <Route path="Play" element={<Play />} />     
    </Routes>
    <Footer/>
    </BrowserRouter> 
  </>,
  document.getElementById('root')
);


