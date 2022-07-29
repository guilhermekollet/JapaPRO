import pedido from "../models/Pedido.js";
import produtos from "../models/Produto.js";
import response from "../../server.js";
import chalk from "chalk";
import pedidos from "../models/Pedido.js";

class PedidosController
{
    static novoPedido = (req, res) => {
        produtos.find((err, produtos) => {
            
            res.status(200).json(produtos);
            console.log(chalk.cyanBright(`Request processed: GET '/pedidos'`));
            
            if(response)
            {
                console.log(chalk.cyan(`<-- [Render] Produtos`));    
            };
    });
    };

    static adicionaPedido = (req, res) => {
        let pedido = new pedidos(req.body);

        pedido.save((err) => {
            if(err)
            {
                res.status(500).send({message: `${err.message} - Não foi possível salvar o pedido.`});
            }
            else
            {
                res.status(201).send(pedido.toJSON());

                if(response)
                {
                    console.log(chalk.cyan(`--> [Save] Pedido`));    
                };
            }
        })

        console.log(chalk.cyanBright(`Request processed: POST '/pedidos'`));
        console.log(chalk.yellowBright(pedido));

    };

    static deletePedido = (req, res) => {
        //V0.8a
    };

}

export default PedidosController;