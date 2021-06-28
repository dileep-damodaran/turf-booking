import * as mongoose from "mongoose";
import { ITurfDocument as ITurfDocument } from "./turfDocument";

let turfSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    is_active: { type: Boolean, required: true, default: true },
    additional_information: { type: String, required: false, unique: false }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

export let Turf: mongoose.Model<ITurfDocument> = mongoose.model<ITurfDocument>("turf", turfSchema);


