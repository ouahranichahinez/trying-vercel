import express from "express";
import { bot } from "./api/bot.js";

export const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

/*
app.get("/", async (req, res) => {
    await bot();
    res.send("you are finished, see you next time :) .");
}); 
*/

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
