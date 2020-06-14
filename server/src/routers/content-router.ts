import express from 'express';
import * as contentService from '../services/content-service';

import {checkAuth} from '../middleware/check-auth';
import { checkManager } from '../middleware/check-manager';

export const ContentRouter = express.Router(); // create + export express router


/*This get request returns a list of all requests. 

    add checkAuth, as middleware to ensure routes are protected
*/
ContentRouter.post('', checkAuth, checkManager,(request, response , next) => {
    contentService.postContent().then(content=>{
        response.status(200).json(content);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    })
});


ContentRouter.post('/employee/:id', checkAuth, (request, response , next) => {
    const id = +request.params.id;
    contentService.postContentID(id).then(content=>{
        response.status(200).json(content);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    })
});

ContentRouter.post('/new',checkAuth,(request,response,next)=>{
    contentService.putRequest(request.body).then(content=>{
        response.status(200).json(content);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    })
});

ContentRouter.post('/approve', checkAuth,checkManager,(request,response,next)=>{
    contentService.approve(request.body).then(content=>{
        response.status(200).json(content);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    })
});

ContentRouter.post('/reject', checkAuth,checkManager,(request,response,next)=>{
    contentService.reject(request.body).then(content=>{
        response.status(200).json(content);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    })
});
ContentRouter.post('/manager/previous', checkAuth, checkManager,(request, response , next) => {
    contentService.postPreviousContent().then(content=>{
        response.status(200).json(content);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    })
});


ContentRouter.post('/employee/previous/:id', checkAuth, (request, response , next) => {
    const id = +request.params.id;
    contentService.postPreviousContentID(id).then(content=>{
        response.status(200).json(content);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    })
});