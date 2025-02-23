import mongoose, {Schema} from "mongoose";
import {Monument} from "./Monument";

export type UUID = string & { readonly __brand: unique symbol };

export interface MonumentCollection {
    userId: UUID;
    monuments: Monument[];
}

const MonumentCollectionSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    monuments: [{ type: Schema.Types.ObjectId, ref: "Monument" }]
});

export const MonumentCollectionModel = mongoose.model("MonumentCollection", MonumentCollectionSchema);