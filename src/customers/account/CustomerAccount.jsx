import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import SubNav from '../../navbar/SubNav';
import CustomerDataTable from '../DataTable'
const CustomerAccount=()=>{
    return(<>
      <SubNav 
      navigator={[
          {title:"Customers",link:'/customer'},
          {title:"Account-ATT",link:'/customer'},
        ]} 
      button={[{title:"Account Statement",'className':""},
               {title:"Balance",'className':""},]}
      toggle='modal'
      target='#myModal'
      />
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
export default CustomerAccount