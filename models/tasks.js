import { Task } from "./task.js";

class Tasks {

  _listing = {};

  get listing() {
    const listing = [];
    Object.keys(this._listing).forEach((key) => {
      const task = this._listing[key];
      listing.push(task);
    });

    return listing;
  }

  constructor() {
    this._listing = {};
  }

  deleteTask( id = '' ) {
    if ( this._listing[id] ) {
      delete this._listing[id];
    }
  }

  loadTasksFromArray( tasks = [] ) {
    tasks.forEach( ( task ) => {
      this._listing[ task.id ] = task;
    });
  }

  createTask(description = "") {
    const task = new Task(description);
    this._listing[task.id] = task;
  }

  listingComplete() {
    console.log('\n');

    this.listing.forEach( ( task, i) => {
      const idx = `${i + 1}.`.green;
      const { description, completedBy } = task;
      const status = (completedBy) 
      ? 'Completed'.green
      : 'Pending'.red;
      
      console.log(`${ idx } ${ description } :: ${ status }`);

      return status;
    });
  }

  listCompletedOrPending( completed = true ) {
    
    let counter = 0;
    this.listing.forEach( task => {
      const { description, completedBy } = task;
      const status = ( completedBy )
      ? 'Completed'.green
      : 'Pending'.red
      
      if ( completed ) {
        if ( completedBy ) {
          counter += 1;
          console.log(`${ (counter + '.').green } ${ description } ${ completedBy }`);
        }
      } else {
        // Show pending
        if ( !completedBy ) {
          counter += 1;
          console.log(`${ ( counter + '.' ).red } ${ description } ${ status }`);
        }
      }
    });
  }

}

export { Tasks };
