const questionOptions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
        {
            value: 1,
            name: 'Create a task',
        },
        {
            value: 2,
            name: 'List all tasks',
        },
        {
            value: 3,
            name: 'List completed tasks',
        },
        {
            value: 4,
            name: 'List pending tasks',
        },
        {
            value: 5,
            name: 'Complete task(s)',
        },
        {
            value: 6,
            name: 'Delete a task',
        },
        {
            value: 0,
            name: 'Exit',
        }],
    }
];

export {
    questionOptions,
}