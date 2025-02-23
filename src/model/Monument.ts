import mongoose from "mongoose";

export interface Monument {
    key: string;
    name: string;
    location: string;
    description: string;
    modelPath: string;
}

export const MonumentSchema = new mongoose.Schema<Monument>({
    key: {type: String, required: true, unique: true},
    name: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    modelPath: { type: String, required: true, unique: true },
})

export const MonumentModel = mongoose.model<Monument>("Monument", MonumentSchema);