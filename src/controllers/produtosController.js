import produtos from "../models/Produto.js";
import chalk from "chalk";
import response from "../../server.js";

class ProdutosController
{
    static listarProdutos = (req, res) => {

        produtos.find((err, produtos) => {

            console.log(chalk.cyanBright(`Request processed: GET '/produtos'`)); 

            if(!err)
            {
                res.status(200).json(produtos);

                if(response)
                {
                    console.log(chalk.cyan(`<-- [Render] Produtos`));
                    console.log(chalk.greenBright(`<-- [Status] 200`));   
                }
            }
            else
            {

            }
            
    });
    };

    static listarProdutoID = (req, res) => {

        const id = req.params.id;
        console.log(chalk.cyanBright(`Request processed: GET '/produtos/${id}'`));

        produtos.findById(id, (err, produtos) => {

            if(!err)
            {
                res.status(200).send(produtos);

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] ID`));
                    console.log(chalk.greenBright(`--- [Finded] ID`)); 
                    console.log(chalk.greenBright(`<-- [Status] 200`));    
                };
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
            };
        });
    };

    static listarProdutoEAN = (req, res) => {
        
        const ean = req.query.ean; //?ean=1234567890123
        console.log(chalk.cyanBright(`Request processed: GET '/produtos/busca?ean=${ean}'`));

        produtos.find({"_ean": ean}, {}, (err, produtos) => {
            
            if(!err)
            {
                res.status(200).send(produtos);

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] EAN`));
                    console.log(chalk.greenBright(`--- [Finded] EAN`)); 
                    console.log(chalk.greenBright(`<-- [Status] 200`));    
                }
            }
            else
            {
                res.status(400).send({message: err.message});

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] EAN`));
                    console.log(chalk.blackBright(`--- [Found] EAN`)); 
                    console.log(chalk.yellowBright(`<-- [Status] 400`));
                }
            }
        });

    };
}

export default ProdutosController;