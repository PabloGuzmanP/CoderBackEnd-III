import express from "express";
import { generateUsersMock } from "./mocks/user.mock.js";

const app = express();

app.listen(8080, () => {
    console.log("Server in port 8080");
})

app.get("/mock/:amount", (req, res) => {
    const { amount } = req.params;
    
    const users = generateUsersMock(amount);
    
    res.send(users)
});