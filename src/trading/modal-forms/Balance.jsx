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
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <div>
                                <label>Customer-type</label>
                                <select className='form-control'>
                                    <option>select customer-type</option>
                                </select>
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div>
                                <label>Whether to participate in foreign and domestic trade</label>
                                <select className='form-control'>
                                    <option>Select Domestic</option>
                                </select>
                            </div>
                            <div>
                                <label>Domestic trading fee</label>
                                <input type="text" className="form-control" placeholder="eg 1.5%" />
                            </div>
                            <div>
                                <label>Company Bond trading fee</label>
                                <input type="text" className="form-control" placeholder="eg 1%" />
                            </div>
                        </div>

                        <div className="col">
                            <div>
                                <label>National iD</label>
                                <input type="text" className="form-control" placeholder="National iD" />
                            </div>
                            <div>
                                <label>Phone number</label>
                                <input type="text" className="form-control" placeholder="Phone number" />
                            </div>
                            <div>
                                <label>Registration payment method</label>
                                <select className='form-control'>
                                    <option>Select Payment method</option>
                                </select>
                            </div>
                            <div>
                                <label>Foreign trading contract</label>
                                <select className='form-control'>
                                    <option>Select trading contact</option>
                                </select>
                            </div>
                            <div>
                                <label>Government Bond trading fee</label>
                                <input type="text" className="form-control" placeholder="eg 1%" />
                            </div>
                            <div >
                                <label>Content</label>
                                <input className="form-control"  type='file' s/>
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