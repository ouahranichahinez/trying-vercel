import express from "express";
import { bot } from "./api/bot.js";

export const app = express();
app.get("/", async (req, res) => {
    await bot();
    res.send("you are finished, see you next time :) .");
});

app.listen(5000, () => {
    console.log("Running on port 5000.");
});
