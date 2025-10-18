// Show result in console------------------------------------------
console.log("Function declaration: the area of the rectangle is", calculateAreaDeclaration(5, 10));

// Function declaration
function calculateAreaDeclaration (width, height) {
    return width * height;
}

// Function expression-------------------------------------------
const calculateAreaExpression = function (width, height) {
    return width * height;
};

// Use of function expression
console.log("Function expression: the area of the rectangle is", calculateAreaExpression(15, 20));


// Arrow function--------------------------------------------------
const calculateAreaArrow = (width, height) => width * height;

// Use of arrow function
console.log("Arrow function: the area of the rectangle is", calculateAreaArrow(25, 50));