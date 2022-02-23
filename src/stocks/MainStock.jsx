import React from 'react';
import TopStocks from './TopStocks';

const MainStocks = () => {
    return (<>
        <div className='col-lg-5 main-stocks-container'>
            <h6 className='p-3'>Top Stocks</h6>
            <TopStocks />
        </div>
        <div className='col-lg-2'></div>
    </>)
}
export default MainStocks