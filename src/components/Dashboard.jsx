import React from 'react';
import MainChart from '../charts/MainChart';
import MainCustomer from '../customers/MainCustomer';
import MainStocks from '../stocks/MainStock';
const Dashboard=()=>{
    return(<>
      <div className='' >
        <MainChart/>
        <div className='row'style={{marginTop:'5rem'}}>
          <MainStocks/>
          <MainCustomer/>
        </div>
      </div>
    </>)
}
export default Dashboard