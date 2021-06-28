import * as express from 'express';
import { FormattedResponse } from '../helpers/formattedResponse';
import logger from '../helpers/logger';
const mung = require('express-mung');

export class CustomResponseHandler{

    public static configure(app : express.Application){

        logger.info("[CONFIGURATION] [STARTED] : CustomResponseHandler");

        app.use(mung.json((body: any, req: express.Request, res: express.Response)=>{

            const formattedResponse = new FormattedResponse(true,body,'');
            return formattedResponse;
        }));

        logger.info("[CONFIGURATION] [COMPLETED] : CustomResponseHandler");
        return app;
    }
}