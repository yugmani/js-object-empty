//1. Pre - ES5 Way
function isEmptyObject(obj) {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      return false;
    }
  }
  return true;
}

// console.log(isEmptyObject({})); //Expected true;
// console.log(isEmptyObject({ foo: '1' })); //Expected false;

//2. The ES5+ Way
// The Object.keys() method returns an array of enumerable property names of a given object.

function hasPropertyObject(obj) {
  return Object.keys(obj).length === 0;
}

// console.log(hasPropertyObject({})); //Expected true;

let bar = { foo: '1' };
// console.log(Object.keys(bar).length); //Expedted 1;
// console.log(hasPropertyObject(bar)); //Expected false;

//3. Object.getOwnPropertyNames() method
// The Object.getOwnPropertyNames() method returns an array of all the properties of a given object.
// This method considers non-enumerable properties as well, whiule Object.keys() considers enumerable properties only.

function getPropertyObject(obj) {
  return Object.getOwnPropertyNames(obj).length === 0;
}

// console.log(getPropertyObject({})); //Expected true;

const yar = { foo: '1' };
// console.log(Object.getOwnPropertyNames(yar).length); //Expected 1;
// console.log(getPropertyObject(yar)); //Expedted false;

// 4. JSON.stringify method
// JSON.stringify method is used to convert a JavaScript object to a JSON string.

function stringifyObject(obj) {
  return JSON.stringify(obj) === '{}';
}

// console.log(stringifyObject({})); //Expected true;

const par = { foo: 1 };
// console.log(JSON.stringify(par)); //Expected {"foo":"1"};
// console.log(stringifyObject(par)); //Expected false;

