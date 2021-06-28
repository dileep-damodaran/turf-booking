import * as express from 'express';
import logger from '../helpers/logger';
import { AccountController } from '../routes/account/account.manage.route';


export class RouteHandler{

    public static configure(app:express.Application):express.Application{

        logger.info("[CONFIGURATION] [STARTED] : RouteHandler");

        app.use("/api/account", AccountController.routes(app));
        
        logger.info("[CONFIGURATION] [COMPLETED] : RouteHandler");

        return app;
    }
}