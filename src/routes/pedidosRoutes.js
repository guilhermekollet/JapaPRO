import express from "express";
import PedidosController from "../controllers/pedidosController.js";

const router = express.Router();

router
    .get("/pedido", PedidosController.listaPedido)
    .get("/pedido/:id", PedidosController.listaPedidoID)
    .post("/pedido", PedidosController.adicionaPedido)
    .put("/pedido/:id", PedidosController.atualizarPedido)
    .delete("/pedido/:id", PedidosController.deletePedido)

export default router;