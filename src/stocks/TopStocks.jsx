import React from "react";
import logo from "../images/logos/Rectangle.png";
import Rectangle1 from "../images/logos/Rectangle-1.png";
import Rectangle2 from "../images/logos/Rectangle-2.png";
import Rectangle3 from "../images/logos/Rectangle-3.png";
import Rectangle4 from "../images/logos/Rectangle-4.png";
import StockList from "./StocksList";

const TopStocks = () => {
  return (
    <>
      <div className="col-lg-6 col-12">
        <div className='top-stocks'>
          <h2 className='stock-text d-inline-block'>
            Top Stock
          </h2>
          <i className="fas fa-angle-right d-inline-block ml-5"></i>
          <div className='col-lg-12 col-12'>
            <div className='row mt-3'>
              <div className='col-lg-2 col-2'>
                <img src={logo} />
              </div>
              <div className="col-lg-3 col-3">
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
              <div className="col-lg-3 col-3">
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
              <div className="col-lg-3 col-3">
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
              <div className="col-lg-3 col-3">
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
              <div className="col-lg-3 col-3">
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
    </>
  );
};
export default TopStocks;
