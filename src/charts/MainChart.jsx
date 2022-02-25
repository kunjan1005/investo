import React from 'react';
import Areachart from './AreaChart';
const MainChart = () => {
  return (<>
    <div className='container  main-chart-contianer'>
      <div className='row'>
        <div className='sub-main-chart-header d-flex'>
          <div className='justify-content-between d-flex'>
          <div className='dh-1'>
            <h5>Executed orders</h5>
            <h6>18,500</h6>
          </div>
          <div className='dh-2'>
            <h5>Customers</h5>
            <h6>125</h6>
          </div>
          <div className='dh-3'>
            <h5>Volume</h5>
            <h6>105,200,750₮</h6>
          </div>
          </div>
          <div className='sub-chart-filter-btns'>
            <p>See more</p>
            <button className='btn btn-default'>7 Days</button>
            <button className='btn btn-default'>1 Month</button>
            <button className='btn btn-default'>3 Month</button>
          </div>
        </div>
      </div>

      <Areachart />
    </div>
  </>)
}
export default MainChart