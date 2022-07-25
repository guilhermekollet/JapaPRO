const fs = require('fs');
const chalk = require('chalk');

class Pedido
{

    constructor()
    {
        //ordem é gerada automaticamente de acordo com a ordem de pedidos do dia (senha)
        this._ordem = this.getOrdem();
        this._status = "Em preparação";
    }

    getOrdem()
    {
        //busca em um arquivo externo .csv a ultima ordem, incrementar e adicionar ao pedido

        const content = fs.readFileSync('./data/ordens.csv').toString();
        const ordens = content.split(',');
        
        if(ordens != "")
        {
            let ordem = ordens.length + 1;
            fs.appendFileSync('./data/ordens.csv', `,${ordem}`);
            return ordem;
        }
        else
        {
            let ordem = 1;
            fs.appendFileSync('./data/ordens.csv', `${ordem}`);
            return ordem;
        }

    }
    
    get()
    {
        return {
            ordem: this._ordem
        };
    }

};

const p1 = new Pedido;
console.log(p1);