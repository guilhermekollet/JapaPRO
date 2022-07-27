import express from "express";
import ProdutosController from "../controllers/produtosController.js";

const router = express.Router();

router
    .get("/produtos", ProdutosController.listarProdutos);

export default router;