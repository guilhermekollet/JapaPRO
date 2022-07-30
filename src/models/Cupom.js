import mongoose from "mongoose";

const cupomSchema = new mongoose.Schema(
    {
        id: {type: String},
        _nome: {type: String, required: true},
        _codigo: {type: String, required: true},
        _desconto: {type: Number, required: true},
        _data_inicio: {type: Date, required: true},
        _data_fim: {type: Date, required: true},
        _ativo: {type: Boolean, required: true},

    },
    {
        versionKey: false
    }
);

const cupons = mongoose.model("cupons", cupomSchema);

export default cupons;