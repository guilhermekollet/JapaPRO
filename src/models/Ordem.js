import mongoose from "mongoose";

const ordemSchema = new mongoose.Schema (
    {
        _name: {type: String, required: true},
        _valor: {type: String, required: true}
    }
);

const ordem = mongoose.model('Ordem', pedidoSchema);

export default ordem;