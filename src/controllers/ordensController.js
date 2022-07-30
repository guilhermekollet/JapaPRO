import ordens from "../models/Ordem.js";
import produtos from "../models/Produto.js";
import response from "../../server.js";
import chalk from "chalk";

class OrdensController
{
    static listaOrdens = (req, res) => {

        console.log(chalk.cyanBright(`Request processed: GET '/ordens'`));
    
        ordens.find().populate("_pedido").exec((err, ordens) => {
        
            if(!err)
            {
                res.status(200).json(ordens);

                if(response)
                {
                    console.log(chalk.cyan(`<-- [Render] Ordens`));
                    console.log(chalk.greenBright(`<-- [Status] 200`));
                }

            }
        });
    }
        
    static listaOrdemID = (req, res) => {
        
        const id = req.params.id;

        console.log(chalk.cyanBright(`Request processed: GET '/pedidos/${id}'`));
        
        ordens.findById(id)
            .populate("_pedido")
            .exec((err, ordens) => {
        
            if(!err)
            {
                res.status(200).json(ordens);

                if(response)
                {
                    console.log(chalk.cyan(`<-- [Render] Ordens`));
                    console.log(chalk.greenBright(`<-- [Status] 200`));
                }

            }
        });

    }

    static adicionaOrdem = (req, res) => {
        
        console.log(chalk.cyanBright(`Request processed: POST '/ordens'`));

        let ordem = new ordens(req.body);

        ordem.save((err) => {

            if(!err)
            {
                res.status(201).send(ordem.toJSON());

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

    static atualizarOrdem = (req, res) => {

        const id = req.params.id;
        console.log(chalk.cyanBright(`Request processed: PUT '/ordens/${id}'`));
        
        ordens.findByIdAndUpdate(id, {$set: req.body}, (err) => {

            if(!err)
            {
                res.status(200).send({message: `Order Updated`});

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] ID`)); 
                    console.log(chalk.greenBright(`--- [Finded] ID`)); 
                    console.log(chalk.bgGreenBright(`--- [Update] Order`));  
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

    static deleteOrdem = (req, res) => {

        const id = req.params.id;
        console.log(chalk.cyanBright(`Request processed: DELETE '/pedidos/${id}'`));

        ordens.findByIdAndDelete(id, (err) => {

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

export default OrdensController;