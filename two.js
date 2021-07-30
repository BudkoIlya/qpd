function Calculate(value) {
  const signs = ["+"];
  const ininialValues = [value];
  const methods = {
    plus: (val) => {
      ininialValues.push(val);
      signs.push("+");
      return methods;
    },
    minus: (val) => {
      signs.push("-");
      ininialValues.push(val);
      return methods;
    },
    multiply: (val) => {
      signs.push("*");
      ininialValues.push(val);
      return methods;
    },
    divide: (val) => {
      signs.push("/");
      ininialValues.push(val);
      return methods;
    },
    calculate: () => {
      const result = [];
      ininialValues.forEach((el, i) => {
        switch (signs[i]) {
          case "+":
            result.push(el);
            break;
          case "-":
            result.push(-el);
            break;
          case "*": {
            const lastElement = result[result.length - 1];
            result.pop();
            result.push(lastElement * el);
            break;
          }
          case "/": {
            const lastElement = result[result.length - 1];
            result.pop();
            result.push(lastElement / el);
            break;
          }
        }
      });
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return result.reduce(reducer, 0);
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
