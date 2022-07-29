import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema (
    {
        _ordem: {type: String, required: true},
        _ean: {type: String, required: true},
        _obs: {type: String}
    }
);

const pedidos = mongoose.model('Pedidos', pedidoSchema);

export default pedidos;