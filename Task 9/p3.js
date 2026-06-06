function modifyArray(arr) {
    arr.push("New Fruit");
    arr.pop();

    return arr;
}

const fruits = ["Apple", "Banana", "Mango"];

console.log(modifyArray(fruits));
