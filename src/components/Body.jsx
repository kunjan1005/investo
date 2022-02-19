import React from 'react';
import ColorChangeBox from '../colorChanger/ColorChangeBox';
import Routing from '../routing/Routing';
import Dashboard from './Dashboard';
const Body=()=>{
    return(<>
    <div className='main-body'>
        <ColorChangeBox/>
        <Routing/>

    </div>
    </>)
}
export default Body;