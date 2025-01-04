import VCard from "vcards-js";
import {Monument} from "./Monument";
import {MuseumVCard} from "./MuseumVCard";
import e from "express";

export function createVCard() {
    const vcard = VCard();

    vcard.firstName = "John";
    vcard.lastName = "Doe";
    vcard.email = "No monument yet";

    return vcard;
}

export function updateCard(oldCard: MuseumVCard, monument: Monument, req: e.Request) {
    const vcard = VCard();

    vcard.firstName = oldCard.firstName || "Unknown";
    vcard.lastName = oldCard.lastName || "Unknown";
    vcard.email = oldCard.monuments || [];

    vcard.email = `Monument: ${monument.name}, Location: ${monument.location}, Description: ${monument.description}`;

    vcard.url = `${req.protocol}://${req.get("host")}${monument.modelUrl}`;
    return vcard;
}