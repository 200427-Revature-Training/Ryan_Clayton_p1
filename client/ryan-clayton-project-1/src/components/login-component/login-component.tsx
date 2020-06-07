import React, { useState, useEffect } from 'react';
import { validate } from '../../remote/login-remote';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import './login-page.css'


const LoginComponent: React.FC<RouteComponentProps> = (props) => {

    let history = props.history;
    let [username, setUsername]=useState('');
    let [password, setPassword]=useState('');  
    let [role ,setRole]=useState('')
     
    const authenticate = ()=>{
        console.log(localStorage.getItem('token'));
        validate({ers_username:username,ers_password:password})
        .then(response=>{
            console.log(response);

            setRole(response);
            
        })
        .catch();
        
        if (role ==="MANAGER"){
            localStorage.setItem('role',role);
            history.push('/manager');
        }else if(role==="EMPLOYEE"){
            localStorage.setItem('role',role);
            history.push('/employee');
        }else{
            localStorage.setItem('role','');
            localStorage.setItem('token','');
        }
        console.log(role)

    }
    if (localStorage.getItem('role')=='MANAGER'){
        return <Redirect to = '/manager'/>
    }else if (localStorage.getItem('role')=='EMPLOYEE'){
        return <Redirect to = '/employee'/>
    }

    
    return (
        
        <section>
            <h1>Reimbursement Request Manager</h1>
            <div className="col center">
                <div className='container'>
            <form>

                    <div className='col'>
                        <img src='https://revature.com/wp-content/uploads/2017/08/rev-logo-2.png'></img>
                    </div>
                    <br></br>
                    <div className='col'>
                        <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='Username'>
                        </input>
                    </div>
                    <br></br>
                    <div className='col'>
                        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password'>
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