import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import Deck from "./models/Deck";
import { config } from 'dotenv';
import { getDecksCotroller } from "./controllers/getDeckController";
import { createDeckController } from "./controllers/createDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";

config();

const PORT = 5001;
const app = express();

app.use(
    cors({
        origin: "*",
    }));
app.use(express.json());

app.get('/decks', getDecksCotroller);
app.post('/decks', createDeckController);
app.delete('/decks/:deckId', deleteDeckController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listening on port ${PORT}`)
    app.listen(PORT);
})
