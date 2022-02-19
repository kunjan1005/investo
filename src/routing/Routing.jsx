import React from 'react';
import { Route, Routes } from 'react-router';
import Dashboard from '../components/Dashboard';
import CustomerAccount from '../customers/account/CustomerAccount';
import MainCustomerPage from '../customers/MainCustomerPage';
import OrderList from '../trading/OrderList';

const Routing=()=>{
    return(<>
    <Routes>
        <Route excat path='/' element={<Dashboard/>}/>
        <Route activeClass='active' excat path='/customer' element={<MainCustomerPage/>}/>
        <Route excat path='/customer/account' element={<CustomerAccount/>}/>
        <Route excat path='/trading' element={<OrderList/>}/>
        
    </Routes>
    </>)
}
export default Routing