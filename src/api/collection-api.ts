import { Request, Response } from "express";
import {createUUID} from "../utils";
import {MonumentCollection, MonumentCollectionModel} from "../model/MonumentCollection";

export async function createCollection(req: Request, res: Response) {
    const userId = createUUID();
    const collection = new MonumentCollection(userId);
    try {
        const savedCollection = await new MonumentCollectionModel(collection).save();
        res.status(200).send(savedCollection);
    } catch(error) {
        res.status(500).send(error);
    }
}

export async function getCollection(req: Request, res: Response) {
    const userId = req.params.userId;
    console.log(userId);
    try {
        const collection = await MonumentCollectionModel
            .findOne({ userId })
            // .populate("monuments");
        res.status(200).send(collection);
    } catch(error) {
        res.status(500).send(error);
    }
}

export function updateCollection(req: Request, res: Response) {
    // Todo: update collection for user by adding new monument
}

export function getMonument(req: Request, res: Response) {
    // Todo: get a specific monument
}