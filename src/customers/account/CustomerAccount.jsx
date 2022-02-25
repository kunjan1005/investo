import React, { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import SubNav from '../../navbar/SubNav';
import CustomerDataTable from '../DataTable'
import Balance from '../modal-forms/Balance';
const CustomerAccount = () => {
  let [showBalance, setShowBalance] = useState(false)
  return (<>
    <Balance setShow={setShowBalance} show={showBalance} />
    <SubNav
      navigator={[
        { title: "Customers", link: '/customer' },
        { title: "Account-ATT", link: '/customer' },
      ]}
      button={[{ title: "Account Statement", 'className': "" },
      { title: "Balance", 'className': "", onModalClick: setShowBalance, show: showBalance }]}
      toggle='modal'
      target='#myModal'
    />
    <div className='py-3'>

      <div className='row customer-main-container'>
        <div className=''>
          <button className='btn btn-default customer-filter'>More filter</button>
        </div>
        {/* <Scrollbars> */}
        <CustomerDataTable />
        {/* </Scrollbars> */}
      </div>
    </div>
  </>)
}
export default CustomerAccount