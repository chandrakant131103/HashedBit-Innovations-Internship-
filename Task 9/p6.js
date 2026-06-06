const person = {
    name: "Chandrakant",
    age: 21,
    occupation: "Student"
};

function greetPerson(person) {
    console.log(
        `Hello, my name is ${person.name}. I am ${person.age} years old and I am a ${person.occupation}.`
    );
}

greetPerson(person);