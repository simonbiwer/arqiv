import mongoose, {Schema} from "mongoose";
import {Monument} from "./Monument";

export type UUID = string & { readonly __brand: unique symbol };

export class MonumentCollection {
    private readonly monuments: Monument[];

    constructor(readonly userId: UUID) {
        this.monuments = [];
    }

    addMonument(monument: Monument) {
        this.monuments.push(monument);
    }

    getMonuments() {
        return this.monuments;
    }
}

const MonumentCollectionSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    monuments: [{ type: Schema.Types.ObjectId, ref: "Monument" }]
});

export const MonumentCollectionModel = mongoose.model("monumentCollection", MonumentCollectionSchema);