
import * as express from 'express';
import { Config } from '../config/config';
import logger from '../helpers/logger';
import { AuthenticationHandler } from './authenticationHandler';
import { CustomResponseHandler } from './customResponseHandler';
import { ExceptionHandler } from './exceptionHandlerMiddleWare';
import { ExpressHandler } from './expressHandler';
import { ExpressLogHandler } from './expressLogHandler';
import { RouteHandler } from './routeHandler';

export class MiddleWareConfig {


    private _app: express.Application;

    constructor() {

        this._app = express();
    }

    public configure(): express.Application {

        logger.info("[CONFIGURATION] [STARTED] : MiddleWareConfig");
        
        ExpressLogHandler.configure(this._app);

        ExpressHandler.load(this._app);

        AuthenticationHandler.configure(this._app, Config.access_token_secret_key);

        CustomResponseHandler.configure(this._app);

        RouteHandler.configure(this._app);

        ExceptionHandler.configure(this._app);

        logger.info("[CONFIGURATION] [COMPLETED] : MiddleWareConfig");

        return this._app;
    }
}