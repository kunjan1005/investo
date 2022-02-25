
import Sidebar from '../sidebar/Sidebar';
import Topnav from '../navbar/Topnav';
import { useState } from 'react';

function Constant() {

    return (
        <div className='row g-0'>
             <Sidebar /> 
            <Topnav  />
        </div>
    );
}

export default Constant;
