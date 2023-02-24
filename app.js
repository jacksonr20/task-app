import colors from 'colors';
import { Tasks }  from './models/tasks.js';
import { readInput } from './output-messages/questions/questions.js';
import { inquirerMenu } from './output-messages/inquirer.js';
import { deleteById, confirmDelete } from './output-messages/confirmDelete/confirmDelete.js';
import { showCheckList } from './output-messages/select-multiple/select-multiple.js';
import { pause } from './output-messages/pause/pause.js';
import { saveTask, readTask } from './database/db-tasks.js';

const main = async() => {
    let opt = '';
    const tasks = new Tasks();

    const tasksDatabase = readTask();

    if ( tasksDatabase ) {
        tasks.loadTasksFromArray( tasksDatabase );
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const description = await readInput( 'Description:' );
                tasks.createTask( description );
            break;
            
            case '2':
                tasks.listingComplete();
            break;

            case '3':
                tasks.listCompletedOrPending( true );
            break;
            
            case '4':
                tasks.listCompletedOrPending( false );
            break;

            case '5':
                const taskIds = await showCheckList( tasks.listing );
                
                tasks.toggleCompleted( taskIds );
            break;

            case '6':
                const id = await deleteById( tasks.listing );

                if ( id !== '0' ) {
                const confirmDeletion = await confirmDelete('Are you sure you want to delete this task?');
                    if ( confirmDeletion ) {
                        tasks.deleteTask( id );
                        console.log('Task deleted');
                    }
                }
            break;

            default:
                console.log(opt);
            break
        }

        saveTask( tasks.listing );

       await pause();

    } while ( opt !== '0' );
}

main();
