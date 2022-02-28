import React, { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import SubNav from '.././navbar/SubNav';
import OrderDataTable from './DataTable'
import Balance from './modal-forms/Balance';
const OrderList=()=>{
    let [showBalance,setShowBalance]=useState(false)
    return(<>
    <Balance setShow={setShowBalance} show={showBalance}/>
      <SubNav 
      navigator={[{title:"Customer",link:'/customer'},{title:"List",link:'/customer/list'}]} 
      button={[{title:"Statement",'className':""},
      {title:"Balance",'className':"",onModalClick:setShowBalance,show:showBalance}]}
      toggle='modal'
      target='#myModal'
      />
           <div className='py-3'>
              
              <div className='row customer-main-container'>
                  <div className=''>
                      <button className='btn btn-default customer-filter'>More filter</button>
                  </div>
                  {/* <Scrollbars> */}
                <OrderDataTable/>
                {/* </Scrollbars> */}
              </div>
            </div>
    </>)
}
export default OrderList