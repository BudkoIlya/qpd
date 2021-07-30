function Calculate(value) {
  const plus = [value];
  const methods = {
    plus: (val) => {
      plus.push(val);
      return methods;
    },
    minus: (val) => {
      plus.push(-val);
      return methods;
    },
    multiply: (val) => {
      const lastElement = plus[plus.length - 1];
      plus.pop();
      plus.push(lastElement * val);
    //   console.log("newPlusArr1", plus);
      return methods;
    },
    divide: (val) => {
      const lastElement = plus[plus.length - 1];
      plus.pop();
      plus.push(lastElement / val);
    //   console.log("newPlusArr2", plus);
      return methods;
    },
    calculate: () => {
    //   console.log("newPlusArr", plus);
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const result = plus.reduce(reducer, 0);
      return result;
    },
  };
  if (new.target === undefined) {
    throw "Error";
  }
  return methods;
}

const result = new Calculate(1)
  .plus(1)
  .minus(3)
  .multiply(2)
  .plus(3)
  .divide(2)
  .calculate();
console.log("RESULT", result);
// const error = Calculate(); // throw error
