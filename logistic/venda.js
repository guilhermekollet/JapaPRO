const Ordem = require('./ordem');

class Pedido
{
    constructor()
    {
        this.ordem = Ordem;
    }
    Ordem()
    {
        return this.ordem;
    }
}

module.exports = Pedido;