import express from "express";
import CuponsController from "../controllers/cuponsController.js";

const router = express.Router();

router
    .get("/cupons", CuponsController.listaCupons)
    .post("/cupons", CuponsController.adicionaCupom)
    .put("/cupons/:id", CuponsController.atualizarCupom)
    .delete("/cupons/:id", CuponsController.deleteCupom)

export default router;