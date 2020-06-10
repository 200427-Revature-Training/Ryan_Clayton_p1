import React from 'react';
import './manager.css';

interface ContentProps{
    content: any;
    key:number;
}
const ManagerCard: React.FC<ContentProps> = (props) => {
    return (

        <div className="col-4" >
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Request Type</h5>
                    <h6 className="card-subtitle mb-2 text-muted">${props.content.reimb_amount}.00</h6>
                    <p className="card-text">{props.content.reimb_description}</p>
                    <button className="btn btn-success">Approve</button>
                    <button className="btn btn-danger">Deny</button>
                    <button className="btn btn-secondary">Modify</button>
                </div>
            </div>
        </div>)
}

export default ManagerCard;