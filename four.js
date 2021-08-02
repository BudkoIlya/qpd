function delay(ms, val) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(val || ms), ms);
  });
}

delay(3000).then((time) => {
  console.log(time);
  console.log(`выполнилось через ${time} секунды`);
});

function all(promises) {
  return new Promise(function (resolve, reject) {
    const arrLength = promises.length;
    const result = [];
    const isLastElement = (idx) => idx === arrLength - 1 && resolve(result);
    promises.forEach(function (p, idx) {
      p.then(function (res) {
        result[idx] = res;
      }, reject).then(() => isLastElement(idx));
    });
  });
}

all([delay(100, "a"), delay(200, "b"), delay(50, "c"), delay(1000, "d")]).then(
  console.log,
  console.error
); // [ a, b, c, d ]

all([
  delay(100, "a"),
  delay(200, "b"),
  Promise.reject(Error("Error")),
  delay(50, "c"),
  delay(1000, "d"),
]).then(console.log, console.error);

// ------------------------------------------------------------------------------------

function race(promises) {
  return new Promise(function (resolve, reject) {
    promises.forEach(function (p) {
      p.then(function (res) {
        resolve(res);
      }, reject);
    });
  });
}
race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Ошибка!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then((res) => console.log(res));
