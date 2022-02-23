
import Sidebar from '../sidebar/Sidebar';
import Topnav from '../navbar/Topnav';
import { useState } from 'react';

function Constant() {
    let [showSidebar, setSidebar] = useState(window.innerWidth >= 767 ? true : false);
    // const setSidebar=()=>{

    // }
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 767) {
            setSidebar(false);
        }
    })
    return (
        <div className='row g-0'>
            {showSidebar ? <Sidebar setShow={setSidebar} show={showSidebar} /> : null}
            <Topnav setSidebar={setSidebar} show={showSidebar} />
        </div>
    );
}

export default Constant;
