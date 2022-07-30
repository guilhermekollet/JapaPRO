import express from "express";
import produtos from "./produtosRoutes.js";
import pedidos from "./pedidosRoutes.js";
import cupons from "./cuponsRoutes.js";
import response from "../../server.js";
import chalk from "chalk";

const routes = (app) => {

    app.route('/').get((req, res) => {
        console.log(chalk.cyanBright(`Request processed: GET '/'`));
            
        if(response)
        {
            console.log(chalk.cyan(`<-- [Render] Home`));    
            console.log(chalk.greenBright(`<-- [Status] 200`));
        };

        res.status(200).send({
            titulo: "Japa Dogs",
            buttons: [
                "Novo Pedido",
                "Produtos",
                "Cupons",
                "Ordens"
            ],
            pedidos: []
        });
    });

    app.use(
        express.json(),
        produtos,
        pedidos,
        cupons
    );
};

export default routes;