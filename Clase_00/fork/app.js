import express from "express";
import { fork } from "child_process";

const app = express();

const operacionCompleja = () =>{
    let result = 0;
    for (let i = 0; i < 5e9; i++) {
        result += i;
    }
    return result;
}

app.get("/suma", (req, res) => {
    const child = fork("./OperacionCompleja.js") // Esto es pasarlo a un proceso hijo
    child.send("Iniciar el calculo");
    child.on("message", (result) => {
        res.send(`Resultado: ${result}`);
    });
});

app.get("/hola", (req, res) => {
    res.send("Hola a todos");
})

app.listen(8080, () => {
    console.log("Server in port 8080");
})