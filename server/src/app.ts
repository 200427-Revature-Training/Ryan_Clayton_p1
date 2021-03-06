import express from 'express';
import bodyParser from 'body-parser';
import { db } from './daos/db';
import { loginRouter } from './routers/login-router';
import { ContentRouter } from './routers/content-router';

const app = express();

const port = process.env.PORT || 3000;
app.set('port', port);

// first middleware
app.use(bodyParser.json({
    limit: '50mb'
  }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true
  }));

app.use((request, response, next) => {
    // the express app is open and in middleware2
    console.log('Hello world');
    next();
});

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization')
    response.setHeader('Access-Control-Allow-Methods', 'GET POST');
    next();
})




/*Routers!!*/

app.use('/login',loginRouter);
app.use('/requests',ContentRouter);




process.on('unhandledRejection',()=>{
    db.end().then(() => {
        console.log('Database pool closed');
    });
})
// starts the express app

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
});