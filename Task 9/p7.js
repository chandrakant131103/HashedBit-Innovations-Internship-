function calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
}

const rectangle = {
    width: 10,
    height: 5
};

console.log(calculateArea(rectangle));