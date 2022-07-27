import produtos from "../models/Produto.js";

class ProdutosController
{
    static listarProdutos = (req, res) => {
        produtos.find((err, produtos) => {
        res.status(200).json(produtos);
    });
    };
}

export default ProdutosController;