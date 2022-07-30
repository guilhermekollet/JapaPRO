import cupons from "../models/Cupom.js";
import response from "../../server.js";
import chalk from "chalk";

class CuponsController
{
    static listaCupons = (req, res) => {

        console.log(chalk.cyanBright(`Request processed: GET '/cupons'`));

            cupons.find((err, cupons) =>{

                if(err)
                { 
                    res.status(500).send({message: err.message});

                    if(response)
                    {
                        console.log(chalk.blackBright(`--- [Error] Cupom`));
                        console.log(chalk.redBright(`<-- [Status] 500`));
                    };

                };

                res.status(200).json(cupons);
            
                if(response)
                {
                    console.log(chalk.cyan(`<-- [Render] Cupom`)); 
                    console.log(chalk.greenBright(`<-- [Status] 200`));    
                };

            });
    };

    static adicionaCupom = (req, res) => {
        
        console.log(chalk.cyanBright(`Request processed: POST '/cupons'`));

        let cupom = new cupons(req.body);

        cupom.save((err) => {

            if(!err)
            {
                res.status(201).send(cupom.toJSON());

                if(response)
                {
                    console.log(chalk.cyan(`--> [Sending] Cupom`));    
                    console.log(chalk.bgGreenBright(`--- [Save] Cupom`));  
                    console.log(chalk.greenBright(`<-- [Status] 201`)); 
                };
            }
            else
            {
                res.status(500).send({message: err.message});

                if(response)
                {
                    console.log(chalk.cyan(`--> [Sending] Cupom`));    
                    console.log(chalk.blackBright(`--- [Unsave] Cupom`));  
                    console.log(chalk.redBright(`<-- [Status] 500`)); 
                };
            }
        })
    };

    static atualizarCupom = (req, res) => {

        const id = req.params.id;
        console.log(chalk.cyanBright(`Request processed: PUT '/cupons/${id}'`));
        
        cupons.findByIdAndUpdate(id, {$set: req.body}, (err) => {

            if(!err)
            {
                res.status(200).send({message: `Order Updated`});

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] ID`)); 
                    console.log(chalk.greenBright(`--- [Finded] ID`)); 
                    console.log(chalk.bgGreenBright(`--- [Update] Cupom`));  
                    console.log(chalk.cyan(`<-- [Status] 200`));   
                };
            }
            else
            {
                res.status(500).send({message: err.message});

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] ID`)); 
                    console.log(chalk.blackBright(`--- [Found] ID`)); 
                    console.log(chalk.redBright(`<-- [Status] 500`));   
                };
            }
        });
    };

    static deleteCupom = (req, res) => {

        const id = req.params.id;
        console.log(chalk.cyanBright(`Request processed: DELETE '/cupons/${id}'`));

        cupons.findByIdAndDelete(id, (err) => {

            if(!err)
            {
                
                res.status(200).send({message: `Order Deleted`});

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] ID`));  
                    console.log(chalk.greenBright(`--- [Finded] ID`));
                    console.log(chalk.bgGreenBright(`--- [Deleted] Cupom`));
                    console.log(chalk.greenBright(`<-- [Status] 200`));  
                }
            }
            else
            {

                res.status(400).send({message: err.message});

                if(response)
                {
                    console.log(chalk.cyan(`--> [Find] ID`));  
                    console.log(chalk.blackBright(`--- [Found] ID`));
                    console.log(chalk.yellowBright(`<-- [Status] 400`));
                }
            }
        })
    };

}

export default CuponsController;