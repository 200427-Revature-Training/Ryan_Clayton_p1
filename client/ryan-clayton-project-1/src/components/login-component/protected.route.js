import React from 'react'
import { Route, Redirect } from 'react-router-dom'


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('token')&&props.location.pathname.split('/')[1].toLocaleUpperCase()===localStorage.getItem('role')) {
                    
                    return <Component {...props} />
                }
                else {
                    return <Redirect
                        to={{ pathname: "/login", state: { from: props.location } }}
                    />
                }

            }
            }
        />
    );
};
/**
 *

import React from 'react'
import {Route, Redirect} from 'react-router-dom'


export const ProtectedRoute = ({component: Component,...rest})=>{
    return (
        <Route {...rest} render= {props => {
            if(!localStorage.getItem('token')){
                <Redirect to={{
                    pathname:"/login", state:{from: props.location}
                }}></Redirect>
            }else{
                return <Component {...props}></Component>
            }
        }}
        />
    )

}

 *
 *
 */