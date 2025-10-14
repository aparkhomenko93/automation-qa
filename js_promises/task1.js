// Function to show text in console with some delay
function showTextWithDelay(text, delay) {
    return setTimeout(() => console.log(text, `(appeared after ${delay}ms delay)`), delay);
}

showTextWithDelay("Here is some text appeared with some delay", 2000);