// Class

class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log(`Woof! My name is ${this.name}`);
    }
}

const dog = new Dog('Fido');

dog.bark();
