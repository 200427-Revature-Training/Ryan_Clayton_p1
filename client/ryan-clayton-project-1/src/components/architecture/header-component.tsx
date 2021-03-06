import React from 'react';
import {Link, withRouter, RouteComponentProps} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './header.css'


const HeaderComponent: React.FC<RouteComponentProps> = (props) => {
    const renderOnCurrentPath = (path:string)=>{
        return path === props.location.pathname ?
        <span className="sr-only">(current)</span>:<span></span>
    }
    const logout = ()=>{
        localStorage.setItem('role','');
        localStorage.setItem('token','');
        props.history.push('/login');

    }
    const previousRequests = props.location.pathname+"/previous"
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/login">Reimbursement Request Manager</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className='nav-links' to="/login">Home {renderOnCurrentPath('/home')}<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-links' to={previousRequests}>View Previous Requests{renderOnCurrentPath('/previous')}</Link>
                    </li>
                    <li>
                        <Button className='btn-dark nav-btn' onClick={logout}>Logout</Button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(HeaderComponent);