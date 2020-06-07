import React, { useState } from 'react';
import './manager.css';

const ManagerCard: React.FC = () => {

    return (

        <section>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Request Type</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Request amount</h6>
                    <p className="card-text">This is the text area for the request's description!</p>
                    <a href="#" className="btn btn-success">Approve</a>
                    <a href="#" className="btn btn-danger">Deny</a>
                    <a href="#" className="btn btn-secondary">Modify</a>
                </div>
            </div>
        </section>)
}

export default ManagerCard;