import colors from 'colors';
import { inquirerMenu } from './outputMessages/inquirer';

console.clear();

const main = async() => {
    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt });
    } while ( opt !== '0' );
}

main();
