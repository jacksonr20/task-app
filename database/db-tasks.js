import fs from "fs";

const filePath = "./database/task.json";

const saveTask = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data));
};

const readTask = () => {

  if ( !fs.existsSync(filePath) ) {
    return null;
  }

  const info = fs.readFileSync(filePath, { encoding: "utf-8" });
  const data = JSON.parse( info );

  return data;
};

export { saveTask, readTask };
