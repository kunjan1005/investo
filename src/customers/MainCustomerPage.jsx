import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import CustomerDataTable from './DataTable'
const MainCustomerPage=()=>{
    return(<>
      <div className='container-fluid p-5'>
              
        <div className='row customer-main-container'>
            <div className='row '>
                <button className='btn btn-default customer-filter'>more filter</button>
            </div>
            <Scrollbars>
          <CustomerDataTable/>
          </Scrollbars>
        </div>
      </div>
    </>)
}
export default MainCustomerPage