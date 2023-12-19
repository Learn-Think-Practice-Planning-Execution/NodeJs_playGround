class Person {
  constructor(name, age, height, address, property) {
    console.log(name, age, height, address, property);

    this.name = name;
    this.age = age;
    this.height = height;
    this.address = address;
  }
}

// module.exports = Person;
export { Person };
