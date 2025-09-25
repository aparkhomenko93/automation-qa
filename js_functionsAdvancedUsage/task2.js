//Example of recursion
function showWorkOfRecursion (num) {
    if (typeof (num) !== "number" || num < 0)
        return console.log("The parameter must be greater or equal to 0");

    console.log("The Num is:", num);

    if (num <= 0) return;

    return showWorkOfRecursion(num - 1);
}

showWorkOfRecursion(5);