import React, { useState } from 'react';
import EmployeeCard from './employee-card';
import { Modal, Button, Form } from 'react-bootstrap';



const EmployeeHome: React.FC = () => {
    const [modalShow, setModalShow] = useState(false);

    return (

        <section>
            <Modal
                size="lg"
                show={modalShow}
                onHide={() => setModalShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        New Reimbursement Request
      </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Request type:</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Request description:</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Request amount:</Form.Label>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                    <Button >Submit</Button>


                </Modal.Footer>
            </Modal>
            <br></br>
            <div className="container">
                <div className='row float-right'>
                    <Button className="btn-dark" onClick={() => setModalShow(true)}>Create New Request</Button>
                </div>
                <div className="row">
                    <div className="col"><EmployeeCard></EmployeeCard></div>
                    <div className="col"><EmployeeCard></EmployeeCard></div>
                    <div className="col"><EmployeeCard></EmployeeCard></div>

                </div>
            </div>
        </section>
    )
}

export default EmployeeHome;