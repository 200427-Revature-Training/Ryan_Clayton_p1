import React, { useState } from 'react';
import { login } from '../../remote/login-remote';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import './login-page.css'


const LoginComponent: React.FC<RouteComponentProps> = (props) => {

    let history = props.history;
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const authenticate = () => {


        console.log(localStorage.getItem('token'));

        //logs the user in
        login({ ers_username: username, ers_password: password })
            .then(role => {
                //if the user has valid credentials, redirect to their respective page
                if (role === "MANAGER") {
                    history.push('/manager');
                } else if (role === "EMPLOYEE") {
                    history.push('/employee');
                } else {
                    localStorage.setItem('role', '');
                    localStorage.setItem('token', '');
            }
        })
        .catch();
    }
    
        //if the user somehow landed on the login screen and already has a valid role, redirect them to the landing page
        if (localStorage.getItem('role')==='MANAGER'){
            return <Redirect to = '/manager'/>
        }else if (localStorage.getItem('role')==='EMPLOYEE'){
            return <Redirect to = '/employee'/>
        }
    

    return (

        <section>
            <h1>Reimbursement Request Manager</h1>
            <div className="col center">
                <div className='container'>
                    <form>

                        <div className='col'>
                        <a href="https://revature.com/wp-content/uploads/2017/08/rev-logo-2.png">
                            <img src='https://revature.com/wp-content/uploads/2017/08/rev-logo-2.png' alt = ''></img>
                        </a>
                        </div>
                        <br></br>
                        <div className='col'>
                            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'>
                            </input>
                        </div>
                        <br></br>
                        <div className='col'>
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'>
                            </input>
                        </div>
                        <br></br>
                    </form>
                    <button type='submit' onClick={authenticate}>Login</button>
                </div>
            </div>
        </section>)
}

export default withRouter(LoginComponent);