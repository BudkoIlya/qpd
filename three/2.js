function createClass({ constructor, ...props }) {
    return function (name) {
      //----obj
      constructor.call(this, name);
      Object.keys(props).map((key) => {this.key = props[key]});
      // return {
      //   name: this.name,
      //   ...props,
      // };
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