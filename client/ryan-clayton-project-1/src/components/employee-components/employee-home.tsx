import React, { useState, useEffect } from 'react';
import EmployeeCard from './employee-card';
import { Modal, Button, Form } from 'react-bootstrap';
import HeaderComponent from '../architecture/header-component';
import { getContentID } from '../../remote/content-remote';
import { ModalComponent } from '../modal/modal-component';



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
            <ModalComponent state={modalShow} setter={setModalShow}></ModalComponent>
            <HeaderComponent></HeaderComponent>
            <br></br>

            <div className="container" style={{ flexDirection: 'row' }}>
                <div className='row' >
                    <Button className="col btn-dark" onClick={() => setModalShow(true)}>Create New Request</Button>
                </div>
                <div className="row">
                {data.map(e=>{return <EmployeeCard key={e.reimb_id} content={e}></EmployeeCard>})}


                </div>
            </div>
        </section>
    )
}

export default EmployeeHome;