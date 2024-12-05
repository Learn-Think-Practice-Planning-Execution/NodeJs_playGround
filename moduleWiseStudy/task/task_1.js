import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import fsPromises from 'fs/promises';
import EventEmitter from 'events';

const emitter = new EventEmitter();
// current directory
const currentdir = path.dirname(fileURLToPath(import.meta.url));
const userdetails = 'userdetails.txt';
const userdetailsjson = 'userdetailsjson.json';
const currentfilepath = path.join(currentdir, userdetailsjson);
// const currentfilepath = path.join(currentdir, 'eventemittercounter');

const eventCounter = {
  user_login_count: 0,
  user_logout_count: 0,
  user_purchase_count: 0,
  user_profile_update_count: 0,
  total_event_emit_count: 0
};
let newUser = {};
let totalData = [];
const userDetailsQuery = async (type, collectuserdata) => {
  // if new user then entry a newuser and update the file

  if (type === 'login') {
    newUser = {
      ...newUser,
      ...collectuserdata
    };
    eventCounter.user_login_count++; //      // eventCounter.user_login_count += 1;
  } else if (type === 'logout') {
    newUser = {
      ...newUser,
      ...collectuserdata
    };
    eventCounter.user_logout_count += 1;
  } else if (type === 'purchase') {
    newUser = {
      ...newUser,
      ...collectuserdata
    };
    eventCounter.user_purchase_count++; //   eventCounter.user_purchase_count += 1;
  } else if (type === 'profile_update') {
    newUser = {
      ...newUser,
      ...collectuserdata
    };
    eventCounter.user_profile_update_count++; //   eventCounter.user_profile_update_count += 1;
  } else {
    console.log('none');
  }

  // total count
  const totalcount = Object.entries(eventCounter).reduce(
    (perValue, curValue, CurINdex, arrOfStrings) => {
      //   console.log(
      //     'perValue, curValue, CurINdex, arrOfStrings',
      //     perValue,
      //     curValue,
      //     CurINdex,
      //     arrOfStrings
      //   );
      console.log('outer', curValue[0] !== 'total_event_emit_count');
      if (curValue[0] !== 'total_event_emit_count') {
        console.log('inter', curValue[1]);
        return perValue + curValue[1];
      }

      return perValue;
    },
    0
  );
  console.log('totalcount', totalcount);
  eventCounter.total_event_emit_count = totalcount;
  // add data to a file

  const newUserAllData = {
    ...newUser,
    ...eventCounter
  };

  try {
    // Convert JavaScript object to JSON string
    const jsonData = JSON.stringify(newUserAllData, null, 2);
    const data = await fsPromises.writeFile(currentfilepath, jsonData, 'utf-8');
  } catch (error) {
    console.error(error);
  }
};

// save all data to a file async and
// append all data to that  file

const getDatafromJson = async () => {
  let readingData = '';
  let jsobj = '';
  try {
    // Check if the file exists
    await fsPromises.access(currentfilepath);

    readingData = await fsPromises.readFile(currentfilepath, 'utf8');
    // parse the data

    jsobj = JSON.parse(readingData);
    // check if the user match pervious user then ,, update only that data
    // if (jsobj)
    //   // get particular user data if avaliable then update state if not then new entry

    console.log('jsobj', jsobj);
  } catch (error) {
    console.error(error);
  }

  return readingData ? jsobj : [];
};
emitter.on('login', async (data) => {
  console.log('user loged in', data);

  const dataJson = await getDatafromJson();
  // check if file exist
  totalData = dataJson;
  console.log('user data ', totalData, dataJson);
  //   userDetailsQuery('login', data);
});
emitter.on('logout', (data) => {
  console.log('user logout');
  userDetailsQuery('logout', data);
});
emitter.on('purchase', (data) => {
  console.log('user purchase');
  userDetailsQuery('purchase', data);
});
emitter.on('profile_update', (data) => {
  console.log('user profile_update');
  userDetailsQuery('profile_update', data);
});

// emitter.emit('login', { name: 'vikas', login: true, user_logout: false });
// emitter.emit('purchase', { user_purchase: 'protien' });
// emitter.emit('profile_update', { profile_update: true });
// emitter.emit('logout', { name: 'vikas', user_logout: true, login: false });

console.log('eventCounter', eventCounter);
console.log('newUser', newUser);
