import inquirer from "inquirer";

const showCheckList = async(tasks = []) => {
    const choices = tasks.map(({ id, description, completedBy }) => {
  
      return {
        value: id ,
        name: `${ description }`,
        checked: ( completedBy ) ? true : false
      };
    });
    
    const deleteMultipleByIds = [
      {
        type: 'checkbox',
        name: 'ids',
        message: 'Select',
        choices
      }
    ];
  
    const { ids } = await inquirer.prompt( deleteMultipleByIds );
  
    return ids;
  };

  export { showCheckList }