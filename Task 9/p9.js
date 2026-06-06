function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const obj1 = {
    name: "John"
};

const obj2 = {
    age: 25
};

console.log(mergeObjects(obj1, obj2));