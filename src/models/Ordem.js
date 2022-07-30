import mongoose from "mongoose";

const ordemSchema = new mongoose.Schema (
    {
        id: {type: String},
        _pedido: {type: mongoose.Schema.Types.ObjectId, ref: "pedidos", required: true},
        _dataHoraRegistro:{type: Date, default: Date.now, required: true},
        _status: {type: String, required: true}
    }
);

const ordem = mongoose.model('ordens', ordemSchema);

export default ordem;