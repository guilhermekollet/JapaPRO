import express from "express";

const app = express();
app.use(express.json());

const produtos = [
    {id: 1, "name": "Japa Dogs", "Valor": 17.99},
    {id: 2, "name": "Coca-coca Lata", "Valor": 5.00}
];

let pedido = new Array;

app.get('/', (req, res) => {
    res.status(200).send("Japa Dogs");
});

app.get('/pedido', (req, res) => {
    console.log(req.body);
    res.status(200).json(pedido);
});

app.post('/pedido', (req, res) => {
    const request = req.body.id;
    let _state = false;

    produtos.forEach(element => {
        
        if(element.id == request)
        {
            console.log(element);
            pedido.push(element);
            _state = true;
        }
    });

    if(_state) res.status(201).send('Pedido salvo');
    else res.status(400).send('Pedido não foi salvo');

    
});

app.delete('/pedido/:id', (req, res) =>{
    const request = req.params.id;
    let _state = false;

    pedido.forEach(element => {
        
        if(element.id == request)
        {
            console.log(pedido);
            pedido.splice(request);
            _state = true;
        }
    });
    
    if(_state) res.status(201).send('Item apagado!');
    else res.status(400).send('Item não apagado');

});

app.get('/produtos', (req, res) =>{
    console.log(req.body);
    res.status(200).json(produtos);
});

export default app;