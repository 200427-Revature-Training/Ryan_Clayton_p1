import express, { response } from 'express';
import * as loginService from '../services/login-service'



export const loginRouter = express.Router();//create + export express router


/*This get requests validates a user's login */
loginRouter.get('', (request, response , next) => {
    const credentials = request.body;
    console.log('inside login')
    loginService.validateLogin(credentials).then(userRole=>{
        response.json(userRole);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    })
});