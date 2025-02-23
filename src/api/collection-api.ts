import { Request, Response } from "express";
import {createUUID} from "../utils";
import {MonumentCollection, MonumentCollectionModel} from "../model/MonumentCollection";
import {MonumentModel} from "../model/Monument";

const MONUMENTS = "monuments";

export async function createCollection(req: Request, res: Response) {
    const userId = createUUID();
    try {
        const savedCollection = await new MonumentCollectionModel({
            userId,
            monuments: []
        }).save();
        res.status(200).send(savedCollection);
    } catch(error) {
        res.status(500).send(error);
    }
}

export async function getCollection(req: Request, res: Response) {
    const userId = req.params.userId;
    try {
        const collection = await MonumentCollectionModel
            .findOne({ userId })
            .populate(MONUMENTS);
        if (!collection) {
            res.status(400).send("No collection for this userId found");
        } else {
            res.status(200).send(collection);
        }
    } catch(error) {
        res.status(500).send(error);
    }
}

export async function updateCollection(req: Request, res: Response) {
    const { userId, monumentKey } = req.body;
    if (!userId || !monumentKey) {
        res.status(400).send("userId and monumentKey are required");
    }

    const monument = await MonumentModel.findOne( {key: monumentKey });
    if (!monument) {
        res.status(404).send("Monument with this key does not exist");
    } else {
        const updatedCollection = await MonumentCollectionModel.findOneAndUpdate(
            { userId },
            { $addToSet: {monuments: monument._id} },
            { new: true }
        ).populate(MONUMENTS);
        if (!updatedCollection) {
            res.status(404).send("No collection for this userId found");
        } else {
            res.status(200).send(updatedCollection);
        }
    }
}

export function getMonument(req: Request, res: Response) {
    // Todo: get a specific monument
}