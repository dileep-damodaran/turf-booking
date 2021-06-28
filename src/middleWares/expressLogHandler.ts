
import * as express from 'express';
import logger from '../helpers/logger';
const expressWinston = require('express-winston');

export class ExpressLogHandler{

    public static configure(app:express.Application): express.Application{

        logger.info("[CONFIGURATION] [STARTED] : ExpressLogHandler");

        app.use(expressWinston.logger({
            winstonInstance: logger
        }));

        logger.info("[CONFIGURATION] [COMPLETED] : ExpressLogHandler");
        return app;
    }
}