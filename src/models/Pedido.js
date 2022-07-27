import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema (
    [{
        _id: {type: String},
        _category: {type: String, required: true},
        _name: {type: String, required: true},
        _valor: {type: String, required: true}
    }]
);

const pedidos = mongoose.model('Pedidos', pedidoSchema);

export default pedidos;