import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import Deck from "./models/Deck";
import { config } from 'dotenv';
import { getDecksController } from "../controllers/getDecksController";
import { createDeckController } from "../controllers/createDeckController";
import { deleteDeckController } from "../controllers/deleteDeckController";
import { getCardsController } from "../controllers/getCardsController";
import { createCardController } from "../controllers/createCardController";

config();

const app = express();
const PORT = 5001;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get('/decks', getDecksController);
app.post('/decks', createDeckController);
app.delete('/decks/:deckId', deleteDeckController)


app.get("/decks/:deckId/cards", getCardsController);
app.post('/decks/:deckId/cards', createCardController);


mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listening on port ${PORT}`)
    app.listen(PORT);
})
