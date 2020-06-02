import React, { useState } from 'react';
import ManagerCard from './manager-card';
import './manager.css';

const ManagerHome: React.FC = (props) => {


    return (

        <section>

            <div className="container">

                <div className="row">
                    <div className="col"><ManagerCard></ManagerCard></div>
                    <div className="col"><ManagerCard></ManagerCard></div>
                    <div className="col"><ManagerCard></ManagerCard></div>

                </div>
            </div>
        </section>)
}

export default ManagerHome;