import React from 'react';
import TopStocks from './TopStocks';

const MainStocks = () => {
    return (<>
        <div className='col-lg-6'>
            <div className='box-shadow'>
                <h6 className='p-3'>Top Stocks</h6>
            </div>
            <TopStocks />
        </div>
    </>)
}
export default MainStocks