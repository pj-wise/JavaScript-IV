// CODE here for your Lambda Classes

class Person {
    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.location = data.location;
    };
    speak() {
        return `Hey, my name is ${this.name}, and I am from ${this.location}!`;
    };
};

class Instructor extends Person {
    constructor(lambda) {
        super(lambda);
        this.specialty = lambda.specialty;
        this.favLanguage = lambda.favLanguage;
        this.catchPhrase = lambda.catchPhrase;
    };
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    };

    grade(student, subject) {

        console.log(`${student.name} recieves a grade of ${} ${subject}`);
    };
};

class Student extends Person {
    constructor(lambda) {
        super(lambda);
        this.previousBackground = lambda.previousBackground;
        this.className = lambda.className;
        this.favSubjects = lambda.favSubjects;
    };
    listsSubjects() {
        for(i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    };
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge for ${subject}`);
    };
};

class ProjectManager extends Instructor {
    constructor(lambda){
        super(lambda);
        this.gradClassName = lambda.gradClassName;
        this.favInstructor = lambda.favInstructor;
    };
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @ channel standy times!`);
    };
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    };
};

const PJ = new Student({
    name: "Pearl",
    age: 17,
    location: 'Florida',
    previousBackground: 'HTML and CSS',
    className: 'WEB21',
    favSubjects: 'food'
 });