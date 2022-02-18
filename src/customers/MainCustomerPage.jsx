import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import CustomerDataTable from './DataTable'
const MainCustomerPage=()=>{
    return(<>
      <div className='container-fluid p-5'>
        {/* <MainChart/> */}
        <div className='row customer-main-container'>
            <Scrollbars>
          <CustomerDataTable/>
          </Scrollbars>
        </div>
      </div>
    </>)
}
export default MainCustomerPage