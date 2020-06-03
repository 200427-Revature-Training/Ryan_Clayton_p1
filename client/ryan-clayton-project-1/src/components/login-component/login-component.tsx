import React, { useState, useEffect } from 'react';
import { validate } from '../../remote/login-remote';



const LoginComponent: React.FC = () => {
    const authenticate = (credentials:any)=>{
        validate(credentials);
    }
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');   

    useEffect(() => {
    }, [])
    
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
                        <button type='submit' onClick={()=>authenticate({ers_username:username,ers_password:password})}>Submit</button>
                    </div>
                </div>
            </form>
        </section>)
}

export default LoginComponent;