const fs = require('fs');

class Pedido
{
    constructor()
    {
        //ordem é gerada automaticamente de acordo com a ordem de pedidos do dia (senha)
        this._ordem = this.getOrdem();
        this._status = "Em preparação";
    }
}