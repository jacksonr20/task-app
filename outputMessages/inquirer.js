// require('colors');
import { colors } from "colors";
// const inquirer = require('inquirer');
import { inquirer } from "inquirer";


const questionOptions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: ['opt1', 'opt2', 'opt3'],
    }
];

const inquirerMenu = async() => {
    console.clear();

    console.log('======================'.green);
    console.log('   Select an option   '.green);
    console.log('======================\n'.green);

    const opt = await inquirer.prompt(questionOptions);
    
    return opt;
}

module.exports = {
    inquirerMenu,
}
