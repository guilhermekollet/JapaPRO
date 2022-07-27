import express from "express";
import db from "./config/dbConnect.js";
import produtos from "./models/Produto.js";

db.on("error", console.log.bind(console, 'Erro de conexão com o MongoDB Atlas'));
db.once("open", () => {
    console.log('Conexão com o MongoDB Atlas realizada com sucesso!');
});

const app = express();
app.use(express.json());

let pedido = new Array;

app.get('/', (req, res) => {
    res.status(200).send("Japa Dogs");
});

app.get('/pedido', (req, res) => {
    res.status(200).json(pedido);
});

app.post('/pedido', (req, res) => {
    const request = req.body.id;
    let _state = false;


    //console.log(produtosImported);

    /*
    produtos.forEach(element => {
        
        if(element.id == request)
        {
            console.log(element);
            pedido.push(element);
            _state = true;
        }
    });
    */

    if(_state) res.status(201).send('Pedido salvo');
    else res.status(400).send('Pedido não foi salvo');

    
});

app.delete('/pedido/:id', (req, res) =>{
    const request = req.params.id;
    let _state = false;

    for(let i=0; i < pedido.length; i++)
    {
        
        if(pedido[i].id == request)
        {
            console.log(pedido);
            pedido.splice(i, 1);
            _state = true;
        }
    };
    
    if(_state) res.status(201).send('Item apagado!');
    else res.status(400).send('Item não apagado');

});

app.get('/produtos', (req, res) => {
    
    produtos.find((err, produtos) => {
        res.status(200).json(produtos);
    });

});

export default app;