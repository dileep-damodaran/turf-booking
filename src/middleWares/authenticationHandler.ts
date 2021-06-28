import * as express from 'express';
import logger from '../helpers/logger';
const JWT = require('express-jwt');
const ALGORITHM = 'HS256';


export class AuthenticationHandler{

    public static configure(app: express.Application, secretKey: string): express.Application {

        logger.info("[CONFIGURATION] [STARTED] : AuthenticationHandler");

        app.use(JWT({
            secret: secretKey, 
            algorithms: [ALGORITHM]
        }).
        unless({
            path:[
                new RegExp("/api/account/login", "i"),
                new RegExp("/api/account/token", "i"),
            ]
        }));

        logger.info("[CONFIGURATION] [COMPLETED] : AuthenticationHandler");

        return app;
    }
}