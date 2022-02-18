import React from 'react';
import { Route, Routes } from 'react-router';
import Dashboard from '../components/Dashboard';
import MainCustomerPage from '../customers/MainCustomerPage';

const Routing=()=>{
    return(<>
    <Routes>
        <Route excat path='/' element={<Dashboard/>}/>
        <Route excat path='/customer' element={<MainCustomerPage/>}/>
    </Routes>
    </>)
}
export default Routing