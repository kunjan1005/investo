
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Constant from './components/Constant';
import Login from './components/Login';
import React,{useState} from 'react';


function App() {
 
  return (
    <Routes>
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/*' element={<Constant />} />
    </Routes>
  );
}

export default App;
