import VCard from "vcards-js";
import {Monument} from "./Monument";
import {MuseumVCard} from "./MuseumVCard";

export function createVCard() {
    const vcard = VCard();

    vcard.firstName = "John";
    vcard.lastName = "Doe";
    vcard.email = "No monument yet";

    return vcard;
}

export function updateCard(oldCard: MuseumVCard, monument: Monument) {
    const vcard = VCard();

    vcard.firstName = oldCard.firstName || "Unknown";
    vcard.lastName = oldCard.lastName || "Unknown";
    vcard.email = oldCard.monuments || [];

    vcard.email = `Monument: ${monument.name}, Location: ${monument.location}, Description: ${monument.description}`;
    return vcard;
}