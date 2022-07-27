import express from "express";
import PedidosController from "../controllers/pedidosController.js";

const router = express.Router();

router
    .get("/pedido", PedidosController.listarPedidos);

export default router;