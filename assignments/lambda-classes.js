// CODE here for your Lambda Classes

class Person{
    constructor(data) {
    this.name = data.name;
    this.age = data.age;
    this.location = data.location;
  }
  speak(){
    return `Hey, my name is ${this.name}, and I am from ${this.location}!`;
  }
}