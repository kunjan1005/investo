import React from 'react';
import MainChart from '../charts/MainChart';
import MainCustomer from '../customers/MainCustomer';
import AddCustomer from '../customers/modal-forms/AddCustomer';
import SubNav from '../navbar/SubNav';
import MainStocks from '../stocks/MainStock';
const Dashboard=()=>{
    return(<>
     <SubNav 
      navigator={[{title:"Dashboard",link:'/'}]} 
      // button={{title:"Add Customer",'className':""}}
      // // modal='data-bs-toggle="modal" data-bs-target="#exampleModal"'
   
      />
      <AddCustomer/>
      <div className='' >
        <MainChart/>
        <div className='row'style={{marginTop:'3rem'}}>
          <MainStocks/>
          <MainCustomer/>
        </div>
      </div>
    </>)
}
export default Dashboard