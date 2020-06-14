import React from 'react';
import './manager.css';
import { approve, reject } from '../../remote/content-remote';
import { Button } from 'react-bootstrap';

interface ContentProps{
    content: any;
    key:number;
    curr:boolean;
}
const ManagerCard: React.FC<ContentProps> = (props) => {
    const sendApprove = async ()=>{
        await approve({req_id:props.content.reimb_id,token:localStorage.getItem('token'),manager_id:localStorage.getItem('id')});
        window.location.reload(false);
    }
    const sendReject = async ()=>{
        await reject({req_id:props.content.reimb_id,token:localStorage.getItem('token'),manager_id:localStorage.getItem('id')});
        window.location.reload(false);
    }

    
    let approveButton = props.curr  ?<Button className="btn btn-success" onClick={sendApprove}>Approve</Button>:<div></div>;
    let rejectButton = props.curr ?<Button className="btn btn-danger" onClick={sendReject}>Deny</Button>:<div></div>;
    return (

        <div className="col-4" >
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{props.content.reimb_type}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">${props.content.reimb_amount}.00</h6>
                    <p className="card-text">{props.content.reimb_description}</p>
                    <p className="card-text">Status: {props.content.reimb_status}</p>
                    <img id = 'img' src= {props.content.reimb_receipt}></img>
                    <br></br>
                    {approveButton}
                    {rejectButton}
                    
                </div>
            </div>
        </div>)
}

export default ManagerCard;