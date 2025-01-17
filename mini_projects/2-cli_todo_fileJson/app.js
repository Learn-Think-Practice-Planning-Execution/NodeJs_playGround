import readline from 'readline'; // synchronous and callback base realine module
import { stdin as input, stdout as output } from 'process'; // node:process module
// import * as readline from 'readline/promises';  // asynchronous and prommise base realine module
import fsPromise from 'fs/promises';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import EventEmitter from 'events';
import { randomUUID } from 'crypto';
import http from 'http';

// global variables
// const emitter = new EventEmitter();
const currentdir = path.dirname(fileURLToPath(import.meta.url));
// const server = http.createServer();

// import readline
// The node:readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.

// To use the promise-based APIs:

// import * as readline from 'node:readline/promises';

// The following simple example illustrates the basic use of the node:readline module.

// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';

// const rl = readline.createInterface({ input, output });

// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();
// Once this code is invoked, the Node.js application will not terminate until the readline.Interface is closed because the interface waits for data to be received on the input stream.

const rl = readline.createInterface({
  input: input,
  output: output
});

// this below code is for todo list cli
const task_list = [];

const addTask = () => {
  rl.question('Enter the task: ', (task) => {
    task_list.push(task);
    console.log(`task Added. ${task}`);
    showMenu(); // show menu after adding task
  });
};

const showTasks = () => {
  task_list.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });

  showMenu(); // show menu after adding task
};
const deleteTask = () => {
  rl.question('Enter the task number to delete: ', (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index < 0 || index >= task_list.length) {
      console.log('Invalid task number');
    } else {
      task_list.splice(index, 1);
      showMenu(); // show menu after deleting task
    }
  });
  // show menu after deleting task
};

const showMenu = () => {
  console.log('\n\n Todo List CLI');
  console.log('1. Add a task');
  console.log('2. Show all tasks');
  console.log('3. Delete a task');
  console.log('4. Exit');

  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        addTask();
        break;
      case '2':
        showTasks();
        break;
      case '3':
        deleteTask();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Invalid choice');
        showMenu();
    }
  });
};

// showMenu();

// file creation in cli and create a file with content json just like package json

const demoData = {
  name: '',
  version: '',
  description: '',
  main: 'index.js',
  type: 'module',
  scripts: {
    start: 'node --watch index.js',
    'server-start': 'nodemon index.js',
    test: 'echo "Error: no test specified" && exit 1'
  },
  author: '',
  license: 'ISC',
  dependencies: {
    // "chalk": "^5.4.1",
    // "ejs": "^3.1.10",
    // "express": "",
    // "nodemon": ""
  }
};
const makefile = async () => {
  try {
    const filename = `${demoData.name}_${randomUUID()}.json`;
    const filepath = path.join(currentdir, filename);

    await fsPromise.writeFile(filepath, JSON.stringify(demoData, null, 2), 'utf8');

    console.log(`File written successfully to ${filepath}`);
    rl.close();
  } catch (error) {
    console.error('Error writing file:', error);
  }
};

const AddmultiDependency = async (key) => {
  while (true) {
    console.log('1. Add new dependency');
    console.log('2. Exit dependency');

    const answerValue = await questions(`\nType new ${key} or type '2' to exit: `);

    if (answerValue === '2') {
      console.log('Exiting dependencies...');
      return; // Properly resolve to exit
    } else if (typeof answerValue === 'string' && answerValue.trim()) {
      demoData[key] = { ...demoData[key], [answerValue.trim()]: '*' };
      console.log(`Added dependency: ${answerValue}`);
    } else {
      console.log('Invalid input. Please try again.');
    }
  }
};

const questions = (query) => {
  return new Promise((resolve, reject) => {
    rl.question(query, (answer) => {
      if (answer) {
        console.log(`Received input: ${answer}`); // Debugging log
        resolve(answer); // Resolve with the answer
      } else {
        console.log('Error: No input received'); // Debugging log
        reject(new Error('No input provided')); // Reject if input is empty
      }
    });
  });
};

const AskFOrQuestion = async () => {
  console.log(`\nEnter your details:`);

  for (const key in demoData) {
    if (key === 'name' || key === 'version' || key === 'description') {
      const answer = await questions(`Type ${key}: `);

      if (!answer.trim()) {
        console.log(`Invalid input for ${key}. Please try again.`);
        continue; // Retry if input is empty
      }

      console.log(`Setting ${key}: ${answer.trim()}`); // Debugging log
      demoData[key] = answer.trim(); // Corrected line
    } else if (key === 'dependencies') {
      await AddmultiDependency(key);
      continue; // Call dependency function
    }
  }
  console.log('All details collected successfully.');
};

// Main execution
// Main execution
AskFOrQuestion()
  .then(() => {
    return questions('Do you want to write data to file? (yes/no): ');
  })
  .then((answer) => {
    if (answer.toLowerCase() === 'yes') {
      makefile();
    } else {
      console.log('No file created');
      rl.close();
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    rl.close();
  });
