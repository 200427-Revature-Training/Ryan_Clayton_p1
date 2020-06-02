import React from 'react';
import {Link, withRouter, RouteComponentProps} from 'react-router-dom';
import { render } from '@testing-library/react';

interface NavbarProps{
    history: History;
}

const HeaderComponent: React.FC<RouteComponentProps> = (props) => {
    const renderOnCurrentPath = (path:string)=>{
        return path === props.location.pathname ?
        <span className="sr-only">(current)</span>:<span></span>
    }
    
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Reimbursement Request Manager</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="./">Home {renderOnCurrentPath('/home')}<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/manager/previous">View Previous Requests{renderOnCurrentPath('/previous')}</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/manager">Create New Request{renderOnCurrentPath('/manager')}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(HeaderComponent);