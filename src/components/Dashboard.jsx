import React from 'react';
import MainChart from '../charts/MainChart';
import MainCustomer from '../customers/MainCustomer';
import AddCustomer from '../customers/modal-forms/AddCustomer';
import SubNav from '../navbar/SubNav';
import MainStocks from '../stocks/MainStock';
import logo from "../images/logos/Rectangle.png";
import Rectangle1 from "../images/logos/Rectangle-1.png";
import Rectangle2 from "../images/logos/Rectangle-2.png";
import Rectangle3 from "../images/logos/Rectangle-3.png";
import Rectangle4 from "../images/logos/Rectangle-4.png";
import customer from "../images/logos/customer.png";

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
        <div className="col-lg-6 col-12">
          <div className='top-stocks'>
            <h2 className='stock-text d-inline-block'>
              Top Stock
            </h2>
            <i className="fa fa-arrow-right d-inline-block ml-5"></i>
            <div className='col-lg-12 col-12'>
              <div className='row mt-3'>
                <div className='col-lg-2 col-2'>
                  <img src={logo} />
                </div>
                <div className="col-lg-3">
                  <p className='text-1 mb-0'>
                    Apu
                  </p>
                  <p className='text-2 mb-0'>
                    Хувьцаа
                  </p>
                </div>
                <div className="col-lg-7 col-7">
                  <div className='one'>
                    <text className='text'>
                      1
                    </text>
                  </div>
                </div>
              </div>

              <div className='row mt-3'>
                <div className='col-lg-2 col-2'>
                  <img src={Rectangle1} />
                </div>
                <div className="col-lg-3">
                  <p className='text-1 mb-0'>
                    Apu
                  </p>
                  <p className='text-2 mb-0'>
                    Хувьцаа
                  </p>
                </div>
                <div className="col-lg-7 col-7">
                  <div className='one'>
                    <text className='text'>
                      1
                    </text>
                  </div>
                </div>
              </div>

              <div className='row mt-3'>
                <div className='col-lg-2 col-2'>
                  <img src={Rectangle3} />
                </div>
                <div className="col-lg-3">
                  <p className='text-1 mb-0'>
                    Apu
                  </p>
                  <p className='text-2 mb-0'>
                    Хувьцаа
                  </p>
                </div>
                <div className="col-lg-7 col-7">
                  <div className='one'>
                    <text className='text'>
                      1
                    </text>
                  </div>
                </div>
              </div>

              <div className='row mt-3'>
                <div className='col-lg-2 col-2'>
                  <img src={Rectangle2} />
                </div>
                <div className="col-lg-3">
                  <p className='text-1 mb-0'>
                    Apu
                  </p>
                  <p className='text-2 mb-0'>
                    Хувьцаа
                  </p>
                </div>
                <div className="col-lg-7 col-7">
                  <div className='one'>
                    <text className='text'>
                      1
                    </text>
                  </div>
                </div>
              </div>

              <div className='row mt-3'>
                <div className='col-lg-2 col-2'>
                  <img src={Rectangle4} />
                </div>
                <div className="col-lg-3">
                  <p className='text-1 mb-0'>
                    Apu
                  </p>
                  <p className='text-2 mb-0'>
                    Хувьцаа
                  </p>
                </div>
                <div className="col-lg-7 col-7">
                  <div className='one'>
                    <text className='text'>
                      1
                    </text>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* second column */}
        <div className="col-lg-6 col-12">
             <div className='top-customer'>
                <h2 className='stock-text d-inline-block'>
                  Top customers
                </h2>
                <i className="fa fa-arrow-right d-inline-block ml-5"></i>
                <div className='col-lg-12 col-12'>
                  <div className='row mt-3'>
                    <div className='col-lg-2 col-2'>
                      <img src={customer} />
                    </div>
                    <div className="col-lg-3">
                        <p className='text-1 mb-0'>
                          Дорж
                        </p>
                        <p className='text-2 mb-0'>
                          ID:21212546
                        </p>
                    </div>
                    <div className="col-lg-7 col-7">
                        <div className='one'>
                          <text className='text'>
                            1
                          </text>
                        </div>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-lg-2 col-2'>
                      <img src={customer} />
                    </div>
                    <div className="col-lg-3">
                        <p className='text-1 mb-0'>
                          Бат
                        </p>
                        <p className='text-2 mb-0'>
                          ID:54646544
                        </p>
                    </div>
                    <div className="col-lg-7 col-7">
                        <div className='one'>
                          <text className='text'>
                            2
                          </text>
                        </div>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-lg-2 col-2'>
                      <img src={customer} />
                    </div>
                    <div className="col-lg-3">
                        <p className='text-1 mb-0'>
                          Ундрал
                        </p>
                        <p className='text-2 mb-0'>
                          ID:65469787
                        </p>
                    </div>
                    <div className="col-lg-7 col-7">
                        <div className='one'>
                          <text className='text'>
                            3
                          </text>
                        </div>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-lg-2 col-2'>
                      <img src={customer} />
                    </div>
                    <div className="col-lg-3">
                        <p className='text-1 mb-0'>
                          Сүх
                        </p>
                        <p className='text-2 mb-0'>
                          ID:56465465
                        </p>
                    </div>
                    <div className="col-lg-7 col-7">
                        <div className='one'>
                          <text className='text'>
                            4
                          </text>
                        </div>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-lg-2 col-2'>
                      <img src={customer} />
                    </div>
                    <div className="col-lg-3">
                        <p className='text-1 mb-0'>
                          Төмөр
                        </p>
                        <p className='text-2 mb-0'>
                          ID:98798798
                        </p>
                    </div>
                    <div className="col-lg-7 col-7">
                        <div className='one'>
                          <text className='text'>
                            5
                          </text>
                        </div>
                    </div>
                  </div>

                </div>
             </div>
           </div>
        {/* <MainStocks/>
          <MainCustomer/> */}
      </div>
    </div>
  </>)
}
export default Dashboard