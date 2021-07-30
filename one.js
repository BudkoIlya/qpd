// const array = [1, 1, 2, 2, 3, 4, 2, 1, 5, "a", "a"];
const array = [1, 1, 2, 2, 3, 4]; 

const sortUnique = (arr) => {
  if (!Array.isArray) return [];
  if (arr.length === 0) return arr;
  const checkedSortArray = [];
  array.forEach((el, i) => {
    if (array[i + 1]) {
      let checked = array[i + 1] >= el
      checkedSortArray.push(checked);
    }
  });
  if (checkedSortArray.some((el) => !el)) return [];
  
  const ret = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      ret.push(arr[i]);
    }
  }
  return ret;
};

console.log(sortUnique(array));

// ------- 2 -------

const val1 = { a: "1", b: { c: "ss" } };
const val2 = { a: "1", b: "a" };
const val3 = true;
const val4 = false;
const val5 = [1, 2, 3];
const val6 = [1, 3, 2];

const isPrimitive = (value) => {
  return value !== Object(value);
};
function isObject(object) {
  return object != null && typeof object === "object";
}

const isEqualObjects = (obj1, obj2) => {
  console.log("1", obj1, "2", obj2);
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    console.log(val1);
    const areObjects = isObject(val1) && isObject(val2);
    console.log(areObjects);
    if (
      (areObjects && !isEqualObjects(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
};

const isEqual = (one, two) => {
  const isPrimitiveOne = isPrimitive(one);
  const isPrimitiveTwo = isPrimitive(two);
  if (isPrimitiveOne && isPrimitiveTwo) {
    return one === two;
  } else if (Array.isArray(one) && Array.isArray(two)) {
    return JSON.stringify(one) == JSON.stringify(two);
  } else if (typeof one !== typeof two) {
    return false;
  } else if (
    (Array.isArray(one) && !Array.isArray(two)) ||
    (Array.isArray(two) && !Array.isArray(one))
  ) {
    return false;
  } else {
    return isEqualObjects(one, two);
  }
};

console.log(isEqual(val1, val2)); // objects
console.log(isEqual(val3, val4)); // bollean
console.log(isEqual(val1, val5)); // object & array
console.log(isEqual(val6, val5)); // arrays

// ------ 3 --------

const difference = (one, two) => {
  const differenceArr = [];
  for (let i = 0; i < one.length; i++) {
    !two.includes(one[i]) && differenceArr.push(one[i]);
  }
  return differenceArr;
};

console.log("difference", difference([1, 2], [2, 3]));
