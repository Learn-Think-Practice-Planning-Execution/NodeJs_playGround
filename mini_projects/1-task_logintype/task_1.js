// task is about to call a function on event emit and update a user details in a file
// 1. create a file userdetailsjson.json
// 2. create a function to get data from file and update a user details
// 3. create a function to write data to the file and save it
// 4. create a function to save all data to a file async and append all data to that  file
// 5. create a function to handle user login and update a user details
// 6. create a event emitter and emit a event on user login, logout, purchase, profile_update
// 7. create a function to handle all events and update a user details
// 8. create a function to get all user details from file

import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import fsPromises from 'fs/promises';
import EventEmitter from 'events';
import { randomUUID } from 'crypto';

const emitter = new EventEmitter();
// current directory
const currentdir = path.dirname(fileURLToPath(import.meta.url));
const userdetails = 'userdetails.txt';
const userdetailsjson = 'userdetailsjson.json';
const currentfilepath = path.join(currentdir, userdetailsjson);
// const currentfilepath = path.join(currentdir, 'eventemittercounter');

let UserData = {
  eventCounter: {
    user_login_count: 0,
    user_logout_count: 0,
    user_purchase_count: 0,
    user_profile_update_count: 0,
    total_event_emit_count: 0
  }
};

// function for get data from file and update a user details

// write data to the file and save it

const getDatafromJson = async () => {
  let jsArryObj = [];
  try {
    // Check if the file exists
    await fsPromises.access(currentfilepath);
    const readingData = await fsPromises.readFile(currentfilepath, 'utf8');

    // parse the data
    jsArryObj = readingData ? JSON.parse(readingData) : [];
    console.log('jsArryObj', jsArryObj);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File does not exist. Initializing an empty file.');
      // Initialize an empty JSON file
      await fsPromises.writeFile(currentfilepath, '[]', 'utf8');
    } else {
      console.error('Error accessing file:', error);
    }
  }

  return jsArryObj;
};

const writeDataToFile = async (datatowrite) => {
  // add data to a file
  console.log('datatowrite', datatowrite);
  try {
    // Convert JavaScript object to JSON string
    const jsonData = JSON.stringify(datatowrite);
    // const jsonData = JSON.stringify(datatowrite, null, 2);
    const data = await fsPromises.writeFile(currentfilepath, jsonData, 'utf-8');
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }

  //   return data;
};

// save all data to a file async and
// append all data to that  file

const userLoginFunHandler = async (loginData) => {
  let totalData = [];
  try {
    const dataJson = await getDatafromJson();

    // update

    // if user exist update current object in array
    if (dataJson.filter((item) => item.username === loginData.username)[0]) {
      //   let PrevData = dataJson.filter((item) => item.username === loginData.username)[0];
      totalData = dataJson.map((item) => {
        if (item.username === loginData.username) {
          return {
            ...item,
            ...loginData,
            login: true,
            eventCounter: {
              ...item.eventCounter,
              user_login_count: item.eventCounter.user_login_count + 1
            }
          };
        }
        return item;
      });
      //   console.log('dataJson PrevData', PrevData);
      // update current UserData and counter data
      console.log('dataJson totalData', totalData);
      //   totalData = JSON.parse(JSON.stringify(dataJson));
      await writeDataToFile(totalData);
    } else {
      // if not matched then add a new user
      dataJson.push({
        // ...UserData,
        ...loginData,
        user_id: randomUUID(),
        login: true,
        eventCounter: {
          user_login_count: 1
          // Add more event counters as needed
        }
      });
      totalData = dataJson;
      await writeDataToFile(totalData);
    }
    // totalData = PrevData;
    return totalData;
  } catch (error) {
    console.log('error', error);
  }
  return totalData;
};

///////////////////////////////////////////////////////////////////////////////////////
emitter.on('login', (data) => {
  //   console.log('user loged in', data);
  userLoginFunHandler(data);
  //   userDetailsQuery('login', data);
});
// emitter.on('logout', (data) => {
//   console.log('user logout');

//   //   userDetailsQuery('logout', data);
// });
// emitter.on('purchase', (data) => {
//   console.log('user purchase');
//   userDetailsQuery('purchase', data);
// });
// emitter.on('profile_update', (data) => {
//   console.log('user profile_update');
//   userDetailsQuery('profile_update', data);
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

emitter.emit('login', { username: 'vikas', user_password: 'something_new3122' });
emitter.emit('login', { username: 'viki', user_password: 'something' });

// emitter.emit('purchase', { username: 'vikas', user_ids: '', user_purchase: 'protien' });
// emitter.emit('profile_update', { profile_update: true });
// emitter.emit('logout', { name: 'vikas', user_logout: true, login: false });

// const userDetailsQuery = async (type, collectuserdata) => {
//     // if new user then entry a UserData and update the file
//     if (type === 'logout') {
//       UserData = {
//         ...UserData,
//         ...collectuserdata
//       };
//       UserData.eventCounter.user_logout_count += 1;
//     } else if (type === 'purchase') {
//       UserData = {
//         ...UserData,
//         ...collectuserdata
//       };
//       UserData.eventCounter.user_purchase_count++; //   eventCounter.user_purchase_count += 1;
//     } else if (type === 'profile_update') {
//       UserData = {
//         ...UserData,
//         ...collectuserdata
//       };
//       UserData.eventCounter.user_profile_update_count++; //   eventCounter.user_profile_update_count += 1;
//     } else {
//       console.log('none');
//     }

//     // total count
//     const totalcount = Object.entries(UserData.eventCounter).reduce(
//       (perValue, curValue, CurINdex, arrOfStrings) => {
//         //   console.log(
//         //     'perValue, curValue, CurINdex, arrOfStrings',
//         //     perValue,
//         //     curValue,
//         //     CurINdex,
//         //     arrOfStrings
//         //   );
//         console.log('outer', curValue[0] !== 'total_event_emit_count');
//         if (curValue[0] !== 'total_event_emit_count') {
//           console.log('inter', curValue[1]);
//           return perValue + curValue[1];
//         }

//         return perValue;
//       },
//       0
//     );
//     console.log('totalcount', totalcount);
//     UserData.eventCounter.total_event_emit_count = totalcount;
//   };
