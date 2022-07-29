import app from './src/app.js'
import chalk from 'chalk';

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(chalk.blue(`\nServer Initialized at http://localhost:${port}`));
});