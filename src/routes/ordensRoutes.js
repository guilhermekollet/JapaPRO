import express from "express";
import OrdensController from "../controllers/ordensController.js";

const router = express.Router();

router
    .get("/ordens", OrdensController.listaOrdens)
    .get("/ordens/:id", OrdensController.listaOrdemID)
    .post("/ordens", OrdensController.adicionaOrdem)
    .put("/ordens/:id", OrdensController.atualizarOrdem)
    .delete("/ordens/:id", OrdensController.deleteOrdem)

export default router;