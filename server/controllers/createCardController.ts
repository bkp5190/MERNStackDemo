import { Request, Response } from "express";
import Deck from "../src/models/Deck";

export async function createCardController(req: Request, res: Response) {
    const deckId = req.params.deckId;
    const deck = await Deck.findById(deckId);
    if (!deck) return res.status(400).send("No such deck");
    const { text } = req.body;
    deck.cards.push(text);
    await deck.save()
    res.json(deck);
}