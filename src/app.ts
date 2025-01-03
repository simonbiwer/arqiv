import express, { Request, Response } from "express";
import {createVCard, updateCard} from "./vCardCreator";
import fs from "fs/promises";
import {MuseumVCard} from "./MuseumVCard";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/vcard", (req: Request, res: Response) => {

  const vCard = createVCard();

  res.setHeader("Content-Type", "text/vcard");
  res.setHeader("Content-Disposition", `attachment; filename="contact.vcf"`);
  res.send(vCard.getFormattedString());
});

app.post("/update", async (req: Request, res: Response) => {
  const { key, oldCard } = req.body;

  if (!key || !oldCard) {
    return res.status(400).json({ error: "Key and oldCard are required." });
  }

  try {
    const data = await fs.readFile("./monuments.json", "utf-8");
    const monuments = JSON.parse(data);

    const monument = monuments[key];
    if (!monument) {
      return res.status(404).json({ error: "Key not found." });
    }
    const museumVCard = new MuseumVCard(oldCard.firstName, oldCard.lastName, oldCard.email);
    const updatedVCard = updateCard(museumVCard, monument);

    res.setHeader("Content-Type", "text/vcard");
    res.setHeader("Content-Disposition", `attachment; filename="updated_contact.vcf"`);
    res.send(updatedVCard.getFormattedString());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating the vCard." });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
