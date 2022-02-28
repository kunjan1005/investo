import React from "react";
import CustomerList from "./CustomerList";
import customer from "../images/logos/customer.png";

const TopCustomer = () => {
  return (
    <>
       <div className="col-lg-6 col-12">
          <div className='top-customer'>
            <h2 className='stock-text d-inline-block'>
              Top customers
            </h2>
            <i className="fas fa-angle-right d-inline-block ml-3"></i>
            <div className="d-inline-block top-customer-tab">
              <h6 className='d-inline-block'>Trading volume</h6>
              <h6 className='d-inline-block'>Activities</h6>

            </div>
            <div className='col-lg-12 col-12'>
              <div className='row mt-3'>
                <div className='col-lg-2 col-2'>
                  <img src={customer} />
                </div>
                <div className="col-lg-3 col-3">
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
                <div className="col-lg-3 col-3">
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
                <div className="col-lg-3 col-3">
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
                <div className="col-lg-3 col-3">
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
                <div className="col-lg-3 col-3">
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
    </>
  );
};
export default TopCustomer;
