import React, { useState } from 'react';


const EmployeeCard: React.FC = () => {

    return (

        <section>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Request Name</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Request id #</h6>
                    <p className="card-text">Some wtf bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </section>)
}

export default EmployeeCard;