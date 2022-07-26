import express from "express";

const app = express();
const produtos = [
    {id: 1, "name": "Japa Dogs"},
    {id: 2, "name": "Japão"}
]

app.get('/', (req, res) => {
    res.status(200).send("Japa Dogs");
});

app.get('/pedido', (req, res) => {
    res.status(200).json(produtos);
})

export default app;