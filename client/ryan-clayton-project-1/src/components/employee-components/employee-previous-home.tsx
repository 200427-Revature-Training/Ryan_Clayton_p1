import React, { useState, useEffect } from 'react';
import EmployeeCard from './employee-card';
import HeaderComponent from '../architecture/header-component';
import {  getEmployeePrevious } from '../../remote/content-remote';



const EmployeePreviousHome: React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await getEmployeePrevious({ token: localStorage.getItem('token') },2);

            setData(result.data);
        };
        fetchData(); 
    },[]);

    return (

        <section>
            <HeaderComponent></HeaderComponent>
            <br></br>
            <h2>Previous Requests</h2>
            <div className="container" style={{ flexDirection: 'row' }}>

                <div className="row">
                {data.map(e=>{return <EmployeeCard key={e.reimb_id} content={e}></EmployeeCard>})}


                </div>
            </div>
        </section>
    )
}

export default EmployeePreviousHome;