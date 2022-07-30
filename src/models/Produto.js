import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema (
    {
        _category: {type: String, required: true},
        _name: {type: String, required: true},
        _valor: {type: String, required: true},
    }
);

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;