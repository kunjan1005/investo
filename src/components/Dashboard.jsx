import React from 'react';
import MainChart from '../charts/MainChart';
import AddCustomer from '../customers/modal-forms/AddCustomer';
import SubNav from '../navbar/SubNav';
import TopStocks from '../stocks/TopStocks';
import TopCustomer from '../customers/TopCustomer';

const Dashboard = () => {
  return (<>
    <SubNav
      navigator={[{ title: "Main Menu", link: '/' }, { title: "Dashboard", link: '/' }]}
    // button={{title:"Add Customer",'className':""}}
    // // modal='data-bs-toggle="modal" data-bs-target="#exampleModal"'

    />
    <AddCustomer />
    <div className='' >
      <MainChart />
      <div className='row py-5'>
       <TopStocks/>

        {/* second column */}
       <TopCustomer/>
        {/* <MainStocks/>
          <MainCustomer/> */}
      </div>
    </div>
  </>)
}
export default Dashboard