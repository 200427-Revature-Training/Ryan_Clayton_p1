import React, { useState, useEffect } from 'react';
import { validate } from '../../remote/login-remote';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';



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
            <form>
                <div className='container'>
                    <div className='col'>
                        <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='Username'>
                        </input>
                    </div>
                    <div className='col'>
                        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password'>
                        </input>
                    </div>
                    <div className='col'>
                        
                    </div>
                </div>
            </form>
            <button type='submit' onClick={authenticate}>Submit</button>
        </section>)
}

export default withRouter(LoginComponent);