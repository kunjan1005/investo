import React from 'react';
import { Route, Routes, Router } from 'react-router';
import PageNotFound from '../404Error/PageNotFound';
import Dashboard from '../components/Dashboard';
import Singup from '../components/Login';
import Login from '../components/Login';
import CustomerAccount from '../customers/account/CustomerAccount';
import MainCustomerPage from '../customers/MainCustomerPage';
import OrderList from '../trading/OrderList';

const Routing = () => {
    return (<>
        <Routes>
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/signup' element={<Singup />} />
            <Route exact  activeClass='active' path='/' element={<Dashboard />} />
            <Route exact activeClass='active' path='/customer' element={<MainCustomerPage />} />
            <Route exact activeClass='active' path='/customer/account' element={<CustomerAccount />} />
            <Route exact activeClass='active' path='/trading' element={<OrderList />} />
            <Route path='*' element={<PageNotFound />} />

        </Routes>
    </>)
}
export default Routing