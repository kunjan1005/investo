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
            <Route excat path='/login' element={<Login/>} />
            <Route excat path='/signup' element={<Singup />} />
            
            <Route excat path='/' element={<Dashboard />} />
            <Route activeClass='active' excat path='/customer' element={<MainCustomerPage />} />
            <Route excat path='/customer/account' element={<CustomerAccount />} />
            <Route excat path='/trading' element={<OrderList />} />
            <Route excat path='*' element={<PageNotFound />} />

        </Routes>
    </>)
}
export default Routing