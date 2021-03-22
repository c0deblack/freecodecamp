let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
let usersNoAlan = {
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
let usersNoJeff = {
  Alan: {
    age: 27,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};


/*
function isEveryoneHere(obj) {
  if (
    obj.hasOwnProperty("Alan") &&
    obj.hasOwnProperty("Jeff") &&
    obj.hasOwnProperty("Sarah") &&
    obj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
}
*/
/*
function isEveryoneHere(obj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    obj.hasOwnProperty(name)
  );
}
*/
function isEveryoneHere(obj) {

  const allNames = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
  const keys = Object.keys(obj);
 // log(allNames);
 // log(keys);

  let namesLength = allNames.length;  
  let keysLength = keys.length;
 // log(namesLength);
  //log(keysLength);


  let nameExists = 'g';
 // log(nameExists);

  for (let i = 0; i < keysLength; i++){
   // log(i);
    
    for (let k = 0; k < namesLength; k++){
      //  log(k);
      //  log(obj);
      //  log(allNames[k]);
      if (!obj.hasOwnProperty(allNames[k])){

        return false;
      }
    }
  }

  return true;

}

function log(output) {
  console.log(output);
}

console.log(isEveryoneHere(users));
