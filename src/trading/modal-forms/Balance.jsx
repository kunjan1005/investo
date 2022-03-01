import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'
import closeBtn from '../../images/logos/closeBtn.png';
const Balance = (props) => {
    return (<>

        <Modal
            size="lg"
            show={props.show}
            onHide={() => props.setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Balance
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='balance-form'>
                    <div className="row">
                        <div className="col">
                            <div>
                                <label>Customer name</label>
                                <input type="text" className="form-control_" placeholder="Search" />
                            </div>
                            <div>
                                <label>E-Mail</label>
                                <input type="text" className="form-control_" placeholder="E-Mail" />
                            </div>
                            <div>
                                <label>Balance</label>
                                <input type="text" className="form-control_" placeholder="Balance" />
                            </div>
                            <div>
                                <label>Securities</label>
                                <select className='form-control_'>
                                    <option>Choose..</option>
                                </select>
                            </div>
                            <div>
                                <label>Quantity</label>
                                <input type="text" className="form-control_" placeholder="Search" />
                            </div>
                            <div>
                                <label>Price</label>
                                <input type="text" className="form-control_" placeholder="Price" />
                            </div>
                            <div>
                                <label>Order type</label>
                                <select className='form-control_'>
                                    <option>Choose..</option>
                                </select>

                            </div>
                            <div>
                                <label>Conditions for fulfillment</label>
                                <select className='form-control_'>
                                    <option>Choose..</option>
                                </select>

                            </div>
                        </div>

                        <div className="col">
                            <div>
                                <label>National iD</label>
                                <input type="text" className="form-control_" placeholder="National iD" />
                            </div>
                            <div>
                                <label>Account number</label>
                                <input type="text" className="form-control_" placeholder="Account number" />
                            </div>
                            <div>
                                <label>Possible balance</label>
                                <input type="text" className="form-control_" placeholder="Possible balance" />
                            </div>
                            <div>
                                <label>Available securities</label>
                                <input type="text" className="form-control_" placeholder="Available securities" />
                            </div>
                            <div>
                                <label>Fee</label>
                                <input type="text" className="form-control_" placeholder="Fee" />
                            </div>
                            <div >
                                <label>Overall trade value</label>
                                <input className="form-control_" type='text' placeholder='Overall trade value' />
                            </div>
                            <div >
                                <label>Date</label>
                                <input className="form-control_" type='date' placeholder='Date' />
                            </div>
                            <div >
                                <label>Order form</label>
                                <select className='form-control_'>
                                    <option>Choose..</option>
                                </select>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='btn-group'>
                            <button className='balance-add' 
                           >Add</button>
                           <span><img src={closeBtn} className="close-btn-img" /></span>
                        </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>

        {/* <div id="myModal" className="customer-modal" role="dialog">
        <div class="modal-dailog  customer-dailog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">
                    <p>Some text in the modal.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div> */}

    </>)
}
export default Balance