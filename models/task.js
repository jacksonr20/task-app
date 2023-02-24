import { v4 as uuid } from "uuid";

class Task {
  constructor( description ) {
    this.id = uuid();
    this.description = description;
    this.completedBy = null;
  }
}

export { Task };
