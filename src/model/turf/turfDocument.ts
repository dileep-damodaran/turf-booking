import { ITurf as ITurf } from "./turf";
import * as mongoose from "mongoose";

export interface ITurfDocument extends mongoose.Document, ITurf {
}

