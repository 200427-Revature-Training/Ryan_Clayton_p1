import express from 'express';
import * as contentService from '../services/content-service';

import {checkAuth} from '../middleware/check-auth';

export const ContentRouter = express.Router(); // create + export express router


/*This get request returns a list of all requests. 

    add checkAuth, as middleware to ensure routes are protected
*/
ContentRouter.get('', checkAuth, (request, response , next) => {
    contentService.postContent().then(content=>{
        response.status(200).json(content);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    })
});


ContentRouter.get('/:id',  (request, response , next) => {
    const id = +request.params.id;
    contentService.postContentID(id).then(content=>{
        response.status(200).json(content);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    })
});


