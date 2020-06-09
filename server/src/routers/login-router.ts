import express from 'express';
import * as loginService from '../services/login-service'
import jwt from 'jsonwebtoken'


export const loginRouter = express.Router(); // create + export express router


/*This get requests validates a user's login */
loginRouter.post('', (request, response , next) => {
    const credentials = request.body;
    loginService.validateLogin(credentials).then(userRole=>{
        if(!userRole){
            return response.status(401).json({
                message: 'Auth failed'
            });
        }
        const token = jwt.sign(
            {username:credentials.ers_username,
             role: userRole.role},
            process.env.JWT_KEY,
            {expiresIn:"1h"});
        response.status(200).json({userRole:userRole.role,token:token});
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    })
});