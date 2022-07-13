import express, { json } from "express";
const app = express();
import bot from "./api/bot.js";

app.use(json({ extended: false }));

app.use("/api/product", bot);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));