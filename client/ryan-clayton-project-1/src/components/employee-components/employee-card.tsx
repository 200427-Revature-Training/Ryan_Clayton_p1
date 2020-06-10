import React from 'react';


interface CardProps{
    content:any;
    key:Number;
}
const EmployeeCard: React.FC<CardProps> = (props) => {

    return (

        <section>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Request Type</h5>
                    <h6 className="card-subtitle mb-2 text-muted">${props.content.reimb_amount}.00</h6>
                    <p className="card-text">{props.content.reimb_description}</p>
                    <button className="btn btn-secondary">Modify</button>
                </div>
            </div>
        </section>)
}

export default EmployeeCard;