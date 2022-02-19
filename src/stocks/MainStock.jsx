import React from 'react';
import TopStocks from './TopStocks';

const MainStocks=()=>{
    return (<>
    <div className='col-lg-5 main-stocks-container'>
        <h6>Top Stocks</h6>
        <TopStocks/>
    </div>
    <div className='col-lg-1'></div>
    </>)
}
export default MainStocks