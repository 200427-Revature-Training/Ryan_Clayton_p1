import React, { useState } from 'react';

const LoginComponent: React.FC = () => {

    return (

        <section>
            <form>
                <div className='container'>
                    <div className='col'>
                        <input type='text' placeholder='Username'>
                        </input>
                    </div>
                    <div className='col'>
                        <input type='password' placeholder='Password'>
                        </input>
                    </div>
                    <div className='col'>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </section>)
}

export default LoginComponent;