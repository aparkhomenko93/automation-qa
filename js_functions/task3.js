// Use function and show result in console
console.log(checkOrder(25, 25))


// Function to check if order possible
function checkOrder(available, ordered) {
    if (typeof available !== "number" || typeof ordered !== "number")
        return "Parameters must be a number.";

    if (available <= 0)
        return "\"Available\" cannot be less or equal to 0.";

    if (ordered <= 0)
        return "Your order is empty";

    return ordered > available
        ? "Your order is too large, we don’t have enough goods."
        : "Your order is accepted";
}