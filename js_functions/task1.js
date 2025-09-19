// Show result in console------------------------------------------
console.log("Function declaration: the area of the rectangle is", calculateAreaDeclaration(5, 10));

// Function declaration
function calculateAreaDeclaration (width, height) {
    return width * height;
}

// Function expression-------------------------------------------
const calculateAreaExpression = function (width, height) {
    console.log("Function expression: the area of the rectangle is", width * height);
}

// Use of function expression
calculateAreaExpression(10, 15);


// Arrow function--------------------------------------------------
const calculateAreaArrow = (width, height) => console.log("Function expression: the area of the rectangle is", width * height);

// Use of arrow function
calculateAreaArrow(25, 50);