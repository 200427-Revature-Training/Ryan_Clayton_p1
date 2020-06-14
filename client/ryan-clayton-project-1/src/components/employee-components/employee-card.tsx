import React from 'react';
import './employee.css'


interface CardProps {
    content: any;
    key: Number;
}
const EmployeeCard: React.FC<CardProps> = (props) => {



    return (
        <div className="col-4">
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                <h5 className="card-title">{props.content.reimb_type}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">${props.content.reimb_amount}.00</h6>
                    <p className="card-text">{props.content.reimb_description}</p>
                    <p className="card-text">{props.content.reimb_status}</p>
                    <img id = 'img' src= {props.content.reimb_receipt}></img>
                </div>
            </div>
        </div>)
}

export default EmployeeCard;