import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal'
const AddCustomer = (props) => {        
    return (<>
        
        <Modal
            size="lg"
            show={props.show}
            onHide={() => props.setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Large Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
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
export default AddCustomer