import { v4 as uuidv4 } from "uuid";
import {UUID} from "./model/MonumentCollection";
import mongoose from "mongoose";

export function createUUID(): UUID {
    return uuidv4() as UUID;
}

const MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017/arqivDB";

export async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
}
