import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'
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
                                <label>Name</label>
                                <input type="text" className="form-control_" placeholder="Search" />
                            </div>
                            <div className='common'>
                                <label>Customer-type</label>
                                <select className='form-control_'>
                                    <option>select customer-type</option>
                                </select>
                            </div>
                            <div className='common'>
                                <label>Email</label>
                                <input type="text" className="form-control_" placeholder="Email" />
                            </div>
                            <div className='common'>
                                <label>Whether to participate in foreign and domestic trade</label>
                                <select className='form-control_'>
                                    <option>Select Domestic</option>
                                </select>
                            </div>
                            <div className='common'>
                                <label>Domestic trading fee</label>
                                <input type="text" className="form-control_" placeholder="eg 1.5%" />
                            </div>
                            <div className='common'>
                                <label>Company Bond trading fee</label>
                                <input type="text" className="form-control_" placeholder="eg 1%" />
                            </div>
                        </div>

                        <div className="col">
                            <div>
                                <label>National iD</label>
                                <input type="text" className="form-control_" placeholder="National iD" />
                            </div>
                            <div className='common'>
                                <label>Phone number</label>
                                <input type="text" className="form-control_" placeholder="Phone number" />
                            </div>
                            <div className='common'>
                                <label>Registration payment method</label>
                                <select className='form-control_'>
                                    <option>Select Payment method</option>
                                </select>
                            </div>
                            <div className='common'>
                                <label>Foreign trading contract</label>
                                <select className='form-control_'>
                                    <option>Select trading contact</option>
                                </select>
                            </div>
                            <div className='common'>
                                <label>Government Bond trading fee</label>
                                <input type="text" className="form-control_" placeholder="eg 1%" />
                            </div>
                            <div className='common'>
                                <label>Content</label>
                                <input className="form-control_"  type='file' />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-default balance-add' 
                           >Add</button>
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