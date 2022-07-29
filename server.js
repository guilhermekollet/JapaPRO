import app from './src/app.js'
import chalk from 'chalk';

let response = true;

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(chalk.blue(`\nServer Initialized at http://localhost:${port}`));
});

export default response;