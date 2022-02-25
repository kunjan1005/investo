import React from 'react';
import TopCustomer from './TopCustomer';
const MainCustomer = () => {
    return (<>
        <div className='col-lg-6'>
            <div className='box-shadow'>
                <h6 className='p-3'>Top Customers</h6>
            </div>
            <TopCustomer />
        </div>
    </>)
}
export default MainCustomer