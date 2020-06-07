import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import ManagerCard from './manager-card';
import './manager.css';
import { Modal, Button, Form } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl'
import HeaderComponent from '../architecture/header-component';


const ManagerHome: React.FC = (props) => {
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
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Request description:</Form.Label>
                            <Form.Control type="text"></Form.Control>

                        </Form.Group>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Append>
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-dark" onClick={() => setModalShow(false)}>Close</Button>
                    <Button className="btn btn-dark">Submit</Button>


                </Modal.Footer>
            </Modal>
            <HeaderComponent></HeaderComponent>
            <br></br>

            <div className="container">
                <div className='row'>
                    <Button className="col-12 btn-dark" onClick={() => setModalShow(true)}>Create New Request</Button>
                </div>
                <div className="row">
                    <div className="col-4"><ManagerCard></ManagerCard></div>
                    <div className="col-4"><ManagerCard></ManagerCard></div>
                    <div className="col-4"><ManagerCard></ManagerCard></div>
                    <div className="col-4"><ManagerCard></ManagerCard></div>
                    <div className="col-4"><ManagerCard></ManagerCard></div>


                </div>
            </div>
        </section>)
}

export default ManagerHome;