import inquirer from "inquirer";
import { questionOptions } from "./questions/questions.js";

const inquirerMenu = async() => {
  console.clear();
  console.log("======================".green);
  console.log("   Select an option   ".white);
  console.log("======================\n".green);

  const { option } = await inquirer.prompt(questionOptions);

  return option;
};

const confirmDelete = async( tasks = [] ) => {

  const choices = tasks.map( ({ id, description, i }) => {
      const idx = `${ i + 1 }`.green;

      return {
          value: [ id ],
          name: `${ idx } ${ [description] }`,
      }
  });

  const questionsToConfirmDelete = [
      {
        types: 'list',
        name: 'id',
        message: 'Delete the following task: ',
        choices
      }
  ];

  const { id } = await inquirer.prompt( questionsToConfirmDelete );
  return id;
}

export { inquirerMenu, confirmDelete };
