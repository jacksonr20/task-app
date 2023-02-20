import inquirer from "inquirer";

const pause = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${ 'Enter'.green } para continuar`
        }
    ];

    console.log('\n');
    inquirer.prompt(question);
}

export {
    pause,
}