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

class Instructor extends Person{
    constructor(lambda) {
      super(lambda)
  this.specialty = lambda.specialty;
  this.favLanguage = lambda.favLanguage;
  this.catchPhrase = lambda.catchPhrase;
}
demo(subject){
  console.log(`Today we are learning about ${subject}`);
}

grade(student, subject){
    console.log(`${student.name} recieves a perfect score on ${subject}`);
}
}