import pedidos from "../models/Pedido.js";
import produtos from "../models/Produto.js";
import response from "../../server.js";
import chalk from "chalk";

class PedidosController
{
    static listaPedido = (req, res) => {

        console.log(chalk.cyanBright(`Request processed: GET '/pedidos'`));

        produtos.find((err, produtos) => {

            if(!err)
            {

                pedidos.find()
                    .populate("_produtos")
                    .exec((err, pedidos) => {

                        if(!err)
                        {
                            res.status(200).json([produtos, pedidos]);

                            if(response)
                            {
                                console.log(chalk.cyan(`<-- [Render] Produtos`));
                                console.log(chalk.cyan(`<-- [Render] Pedidos`));
                                console.log(chalk.greenBright(`<-- [Status] 200`));
                            }
                        }
                        else
                        {
                                
                            res.status(500).send({message: err.message});
                                
                            if(response)
                            {
                                console.log(chalk.blackBright(`--- [Error] Pedidos`));
                                console.log(chalk.redBright(`<-- [Status] 500`));
                            }

                        }                
                }); 

            }
            else
            {

                res.status(500).send({message: err.message});
                
                if(response)
                {
                    console.log(chalk.blackBright(`--- [Error] Produtos`));
                    console.log(chalk.redBright(`<-- [Status] 500`));
                }
            }

        });
        
    }
        
    static listaPedidoID = (req, res) => {
        
        const id = req.params.id;

        console.log(chalk.cyanBright(`Request processed: GET '/pedidos/${id}'`));

        pedidos.findById(id).populate("_produtos").exec((err, pedidos) => {

            if(!err)
            {
                res.status(200).send(pedidos);

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] ID`));
                    console.log(chalk.greenBright(`--- [Finded] ID`)); 
                    console.log(chalk.greenBright(`<-- [Status] 200`));    
                }
            }
            else
            {
                res.status(400).send({message: err.message});

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] ID`));
                    console.log(chalk.blackBright(`--- [Found] ID`)); 
                    console.log(chalk.yellowBright(`<-- [Status] 400`));
                }
            }
        });
        
    }

    static adicionaPedido = (req, res) => {
        
        console.log(chalk.cyanBright(`Request processed: POST '/pedidos'`));

        let pedido = new pedidos(req.body);

        pedido.save((err) => {

            if(!err)
            {
                res.status(201).send(pedido.toJSON());

                if(response)
                {
                    console.log(chalk.cyan(`--> [Sending] Order`));    
                    console.log(chalk.bgGreenBright(`--- [Save] Order`));  
                    console.log(chalk.greenBright(`<-- [Status] 201`)); 
                };
            }
            else
            {
                res.status(500).send({message: err.message});

                if(response)
                {
                    console.log(chalk.cyan(`--> [Sending] Order`));    
                    console.log(chalk.blackBright(`--- [Unsave] Order`));  
                    console.log(chalk.redBright(`<-- [Status] 500`)); 
                };
            }
        })
    };

    static atualizarPedido = (req, res) => {

        const id = req.params.id;
        console.log(chalk.cyanBright(`Request processed: PUT '/pedidos/${id}'`));
        
        pedidos.findByIdAndUpdate(id, {$set: req.body}, (err) => {

            if(!err)
            {
                res.status(200).send({message: `Order Updated`});

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] ID`)); 
                    console.log(chalk.greenBright(`--- [Finded] ID`)); 
                    console.log(chalk.bgGreenBright(`--- [Update] Pedido`));  
                    console.log(chalk.cyan(`<-- [Status] 200`));   
                };
            }
            else
            {
                res.status(500).send({message: err.message});

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] ID`)); 
                    console.log(chalk.blackBright(`--- [Found] ID`)); 
                    console.log(chalk.redBright(`<-- [Status] 500`));   
                };
            }
        });
    };

    static deletePedido = (req, res) => {

        const id = req.params.id;
        console.log(chalk.cyanBright(`Request processed: DELETE '/pedidos/${id}'`));

        pedidos.findByIdAndDelete(id, (err) => {

            if(!err)
            {
                
                res.status(200).send({message: `Order Deleted`});

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] ID`));  
                    console.log(chalk.greenBright(`--- [Finded] ID`));
                    console.log(chalk.bgGreenBright(`--- [Deleted] Order`));
                    console.log(chalk.greenBright(`<-- [Status] 200`));  
                }
            }
            else
            {

                res.status(400).send({message: err.message});

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] ID`));  
                    console.log(chalk.blackBright(`--- [Found] ID`));
                    console.log(chalk.yellowBright(`<-- [Status] 400`));
                }
            }
        })
    };

}

export default PedidosController;