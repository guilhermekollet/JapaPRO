import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"; 
import chalk from 'chalk';

db.on("error", console.log.bind(console, chalk.bgRed('Connection Error MongoDB Atlas\n')));
db.once("open", () => {
    console.log(chalk.bgGreen('MongoDB Atlas Successfully Connected\n'));
});

const app = express();
routes(app); 

export default app;