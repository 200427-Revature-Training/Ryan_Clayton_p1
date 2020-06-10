import React, { useState, useEffect } from 'react';
import EmployeeCard from './employee-card';
import { Modal, Button, Form } from 'react-bootstrap';
import HeaderComponent from '../architecture/header-component';
import { getContentID } from '../../remote/content-remote';



const EmployeeHome: React.FC = () => {
    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState<any[]>([]);


    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await getContentID({ token: localStorage.getItem('token') },2);

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
            <HeaderComponent></HeaderComponent>
            <br></br>

            <div className="container" style={{ flexDirection: 'row' }}>
                <div className='row' >
                    <Button className="col btn-dark" onClick={() => setModalShow(true)}>Create New Request</Button>
                </div>
                <div className="row">
                {data.map(e=>{return <div className="col-4"><EmployeeCard key={e.reimb_id} content={e}></EmployeeCard></div>})}


                </div>
            </div>
        </section>
    )
}

export default EmployeeHome;