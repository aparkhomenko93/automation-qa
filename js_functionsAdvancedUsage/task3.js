//Divide function
function divide (numerator, denominator) {
    if (typeof(numerator) != "number" || typeof(denominator) != "number")
        return console.log("The both numerator and denominator must be a numbers.");

    if(denominator === 0)
        return console.log("The denominator must be a number.");

    return numerator / denominator;
}

//Call of function #1
try {
    divide(1, 5);
}
catch (error){
    console.log("The error has occurred:", error);
}
finally {
    console.log("The end of the program.");
}

//Call of function #2 - case when argument is not a number
try {
    divide("1", 5);
}
catch (error){
    console.log("The error has occurred:", error);
}
finally {
    console.log("The end of the program.");
}

//Call of function #3 - case when denominator === 0
try {
    divide(1, 0);
}
catch (error){
    console.log("The error has occurred:", error);
}
finally {
    console.log("The end of the program.");
}

//Call of function #4 - test error
try {
    divide(1, 0);
    throw new Error("This is a test error.");  //Error just to show example
}
catch (error){
    console.log("The error has occurred:", error.message);
}
finally {
    console.log("The end of the program.");
}