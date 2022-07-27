import pedido from "../models/Pedido.js";

class PedidosController
{
    static listarPedidos = (req, res) => {
        pedido.find((err, pedido) => {
        res.status(200).json(pedido);
    });
    };
}

export default PedidosController;