
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Constant from './components/Constant';
import Login from './components/Login';
import React,{useState} from 'react';
import Sidebar from "./sidebar/Sidebar";
import Topnav from './navbar/Topnav';


function App() {
  let [showSidebar,setSidebar]=useState(window.innerWidth>=767?true:false);
  // const setSidebar=()=>{
    
  // }
  // window.addEventListener('resize',()=>{
  //   if(window.innerWidth<=767){
  //     setSidebar(false);
  //   }
  // })
  return (
    <div className='row'>
        {showSidebar?<Sidebar setShow={setSidebar} />:null}
        <Topnav  setSidebar={setSidebar}/>
    </div>
  );
}

export default App;
