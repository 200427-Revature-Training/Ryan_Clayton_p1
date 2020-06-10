import React, { useState, useEffect } from 'react';
import ManagerCard from './manager-card';
import './manager.css';
import { Button } from 'react-bootstrap';
import HeaderComponent from '../architecture/header-component';
import { getContent } from '../../remote/content-remote';
import { ModalComponent } from '../modal/modal-component';


const ManagerHome: React.FC = () => {
    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getContent({ token: localStorage.getItem('token') });

            setData(result.data);
        };
        fetchData();
    }, []);




    return (


        <section>
            <ModalComponent state={modalShow} setter={setModalShow}></ModalComponent>
            <HeaderComponent></HeaderComponent>
            <br></br>

            <div className="container">
                <div className='row'>
                    <Button className="col-12 btn-dark" onClick={() => setModalShow(true)}>Create New Request</Button>
                </div>
                <div className="row">
                    {data.map((e, i) => { return <ManagerCard key={i} content={e}></ManagerCard> })}



                </div>
            </div>
        </section >)
}

export default ManagerHome;