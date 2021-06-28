import * as express from "express";
import logger from "../helpers/logger";
const boom = require('express-boom');
const cors = require("cors");

export class ExpressHandler {

    public static load(app: express.Application): express.Application {

        logger.info("[CONFIGURATION] [STARTED] : ExpressHandler");

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(cors());
        app.use(boom());

        logger.info("[CONFIGURATION] [COMPLETED] : ExpressHandler");
        return app;
    }
}