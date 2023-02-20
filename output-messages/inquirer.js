import inquirer from "inquirer";
import { questionOptions } from "./questions/questions.js";

const inquirerMenu = async() => {
  console.clear();
  console.log("======================".green);
  console.log("   Select an option   ".green);
  console.log("======================\n".green);

  const { option } = await inquirer.prompt(questionOptions);

  return option;
};

export { inquirerMenu };
