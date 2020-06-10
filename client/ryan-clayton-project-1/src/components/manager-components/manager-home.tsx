import React, { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import ManagerCard from './manager-card';
import './manager.css';
import { Modal, Button, Form } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl'
import HeaderComponent from '../architecture/header-component';
import { getContent } from '../../remote/content-remote';


const ManagerHome: React.FC = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState<any[]>([]);
    
    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await getContent({ token: localStorage.getItem('token') });

            setData(result.data);
        };
        fetchData(); 
    },[]);


    
    
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
                {data.map((e,i)=>{return <ManagerCard key={i} content={e}></ManagerCard>})}



                </div>
            </div>
        </section>)
}

export default ManagerHome;