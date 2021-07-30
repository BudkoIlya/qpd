Array.prototype.first = function first() {
    return this[0];
  };
  Array.prototype.last = function last() {
    return this[this.length - 1];
  };
  Array.prototype.random = function random() {
    return this[Math.round(Math.random() * this.length)];
  };
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("1", arr.first());
  console.log("2", arr.last());
  console.log("3", arr.random());