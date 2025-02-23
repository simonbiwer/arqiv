import mongoose from "mongoose";

export interface Monument {
    name: string;
    location: string;
    description: string;
    modelPath: string
}

export const MonumentSchema = new mongoose.Schema({
    name: { type: Number, required: true, unique: true },
    location: { type: Number, required: true },
    description: { type: String, required: true },
    modelPath: { type: Number, required: true, unique: true },
})

export const MonumentModel = mongoose.model("monument", MonumentSchema);