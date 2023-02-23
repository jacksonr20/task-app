import inquirer from "inquirer";

const questionOptions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
        {
            value: '1',
            name: `${'1'.green}. Create a task`,
        },
        {
            value: '2',
            name: `${'2'.green}. List all tasks`,
        },
        {
            value: '3',
            name: `${'3'.green}. List completed tasks`,
        },
        {
            value: '4',
            name: `${'4'.green}. List pending tasks`,
        },
        {
            value: '5',
            name: `${'5'.green}. Complete task(s)`,
        },
        {
            value: '6',
            name: `${'6'.green}. Delete a task`,
        },
        {
            value: '0',
            name: `${'0'.green}. Exit`,
        }],
    }
];

const readInput = async( message ) => {
    const question = [
      {
        type: 'input',
        name: 'description',
        message,
        validate( value ) {
            if (value.length === 0) {
                return 'Please enter a value';
            }
            return true;
        }
      }
    ];

    const { description } = await inquirer.prompt(question);

    return description
}

export {
    questionOptions,
    readInput,
}