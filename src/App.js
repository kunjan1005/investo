import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Sidebar from './sidebar/Sidebar';
import Topnav from './navbar/Topnav';
import { useState } from 'react';

function App() {
  let [showSidebar,setSidebar]=useState(window.innerWidth>=767?true:false);
  // const setSidebar=()=>{
    
  // }
  window.addEventListener('resize',()=>{
    if(window.innerWidth<=767){
      setSidebar(false);
    }
  })
  return (
    <div className='row g-0'>
        {showSidebar?<Sidebar setShow={setSidebar} />:null}
        <Topnav  setSidebar={setSidebar}/>
    </div>
  );
}

export default App;
