const person = {
    name: "John",
    age: 25,
    city: "Delhi"
};

function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys(person));