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

console.log(hasPropertyObject({})); //Expected true;

let bar = { foo: '1' };
console.log(Object.keys(bar).length); //Expedted 1;
console.log(hasPropertyObject(bar)); //Expected false;
