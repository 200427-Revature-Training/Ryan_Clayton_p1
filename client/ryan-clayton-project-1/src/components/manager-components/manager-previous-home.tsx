import React, { useState, useEffect } from 'react';
import ManagerCard from './manager-card';
import './manager.css';
import HeaderComponent from '../architecture/header-component';
import { getManagerPrevious } from '../../remote/content-remote';


const ManagerPreviousHome: React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getManagerPrevious({ token: localStorage.getItem('token') });

            setData(result.data);
        };
        fetchData();
    }, []);




    return (


        <section>
            <HeaderComponent></HeaderComponent>
            <br></br>
            <h2>Previous Requests</h2>
            <div className="container">
                
                <div className="row">
                    {data.map((e, i) => { return <ManagerCard curr = {false} key={i} content={e}></ManagerCard> })}



                </div>
            </div>
        </section >)
}

export default ManagerPreviousHome;