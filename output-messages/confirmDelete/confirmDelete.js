import inquirer from "inquirer";

const deleteById = async (tasks = []) => {
    const choices = tasks.map(({ id, description }, i) => {
      const idx = `${i + 1}.`.green;
  
      return {
        value: [ id ],
        name: `${ idx } ${[ description ]}`,
      };
    });
    
    choices.unshift({
        value: `0`,
        name: `${'0.'.green} Cancel`,
    })

    const deleteById = [
      {
        type: "list",
        name: "id",
        message: "Delete",
        choices,
      },
    ];
  
    const { id } = await inquirer.prompt(deleteById);
  
    return id;
  };

  const confirmDelete = async( message ) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message,
        }
    ];

    const { ok } = await inquirer.prompt( question );
    return ok;
  } 

  export { deleteById, confirmDelete }