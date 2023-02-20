import colors from 'colors';
import { inquirerMenu } from './output-messages/inquirer.js';
import { pause } from './output-messages/pause/pause.js';

console.clear();

const main = async() => {
    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt });

       await pause();

    } while ( opt !== 0 );
}

main();
