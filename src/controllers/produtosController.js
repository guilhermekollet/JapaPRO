import produtos from "../models/Produto.js";
import chalk from "chalk";
import response from "../../server.js";

class ProdutosController
{
    static listarProdutos = (req, res) => {
        produtos.find((err, produtos) => {
            
            res.status(200).json(produtos);
            console.log(chalk.cyanBright(`Request processed: GET '/produtos'`));
            
            if(response)
            {
                console.log(chalk.cyan(`<-- [Render] Produtos`));   
            }
    });
    };
}

export default ProdutosController;