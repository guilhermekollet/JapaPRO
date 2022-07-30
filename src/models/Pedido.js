import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema (
    {
        _ordem: {type: String, required: true},
        _produtos: {type: mongoose.Schema.Types.ObjectId, ref: "produtos", required: true},
        _obs: {type: String}
    }
);

const pedidos = mongoose.model('pedidos', pedidoSchema);

export default pedidos;