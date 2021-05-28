// Pre - ES5 Way
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
