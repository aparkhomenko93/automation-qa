//Function to return message for even num
const showMessageForEvenNum = () => console.log("The number is even.")

//Function to return message for odd num
const showMessageForOddNum = () => console.log("The number is odd.")



//Function to check of num is even or odd
function handleNum (num, onEven, onOdd){
    if (typeof(num) !== "number")
        return console.log("First parameter must be a number");

    return num % 2 === 0 ? onEven() : onOdd();
}

//Usage of function to check of num is even or odd
handleNum(123, showMessageForEvenNum, showMessageForOddNum);