function createClass({ constructor, ...props }) {
    return function (name) {
      constructor.call(this, name);
      Object.keys(props).forEach((key) => {this[key] = props[key]});
    };
  }
  
  const Cat = createClass({
    constructor(name) {
      this.name = name;
    },
    meow() {
      console.log(`Meow, I'm ${this.name}`);
    },
    color: "brown",
  });
  
  const barsik = new Cat("Barsik");
  barsik.meow();