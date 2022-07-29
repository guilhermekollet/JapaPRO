import express from "express";
import produtos from "./produtosRoutes.js";
import pedidos from "./pedidosRoutes.js";
import response from "../../server.js";
import chalk from "chalk";

const routes = (app) => {

    app.route('/').get((req, res) => {
        console.log(chalk.cyanBright(`Request processed: GET '/'`));
            
        if(response)
        {
            console.log(chalk.cyan(`<-- [Render] Home`));    
        };

        res.status(200).send({titulo: "Japa Dogs"});
    });

    app.use(
        express.json(),
        produtos,
        pedidos
    );
};

export default routes;