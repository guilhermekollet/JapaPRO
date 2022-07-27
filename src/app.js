import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"; 

db.on("error", console.log.bind(console, 'Erro de conexão com o MongoDB Atlas'));
db.once("open", () => {
    console.log('Conexão com o MongoDB Atlas realizada com sucesso!');
});

const app = express();
routes(app); 

let pedido = new Array;

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

export default app;