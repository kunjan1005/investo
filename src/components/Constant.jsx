
import Sidebar from '../sidebar/Sidebar';
import Topnav from '../navbar/Topnav';
import { useState ,useEffect, useDebugValue } from 'react';

function Constant() {
    let [show,setShow]=useState(window.screen.width>1000?true:false);
    useEffect(()=>{
        window.addEventListener('resize',()=>{
        if(window.screen.width>1000){
            setShow(true);
        }else if(window.screen.width<1500){
             setShow(false);
        }
        })
        
    })

    return (
        <div className='row g-0'>
             {show?<Sidebar isShow={show} show={setShow}/>:null} 
            <Topnav isShow={show} show={setShow}/>
        </div>
    );
}

export default Constant;
