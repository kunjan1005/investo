import React from 'react';
import TopCustomer from './TopCustomer';
const MainCustomer = () => {
    return (<>
        <div className='col-lg-5 main-customer-container'>
            <h6 className='p-3'>Top Customers</h6>
            <TopCustomer />
        </div>
    </>)
}
export default MainCustomer