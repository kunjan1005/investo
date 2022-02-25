import React,{useState} from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import SubNav from '../navbar/SubNav';
import CustomerDataTable from './DataTable'
import AddCustomer from './modal-forms/AddCustomer';

const MainCustomerPage=()=>{
  const [lgShow, setLgShow] = useState(false);
    return(<>
    <AddCustomer setShow={setLgShow} show={lgShow}/>    
      <SubNav 
        navigator={[{title:"Customer",link:'/customer'},{title:"List",link:'/customer/list'}]} 
        button={[{title:"Add Customer",'className':"",onModalClick:setLgShow,show:lgShow}]}
        toggle='modal'
        target='#myModal'
      />
      
      <div className='py-3'>
              
        <div className='row customer-main-container'>
            <div className=''>
                <button className='btn btn-default customer-filter'>More filter</button>
            </div>
            {/* <Scrollbars> */}
          <CustomerDataTable/>
          {/* </Scrollbars> */}
        </div>
      </div>
    </>)
}
export default MainCustomerPage