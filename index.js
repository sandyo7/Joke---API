import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const API_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";



app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const result = response.data
        res.render("index.ejs", { joke: result.setup, answer: "Answer: " + result.delivery });
    } catch (error) {
        console.error("Error fetching joke:", error);
        res.render("index.ejs", { joke: "Failed to load joke" });
    }
})

app.post("/refresh", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const result = response.data
        res.render("index.ejs", { joke: result.setup, answer: "Answer: " + result.delivery });
    } catch (error) {
        console.error("Error fetching joke:", error);
        res.render("index.ejs", { joke: "Failed to load joke" });
    }
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})