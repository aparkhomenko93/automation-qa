//Set number
const number = 10;

//Cycle "for"
console.log("Cycle \"For\"");

for(let i = 1; i <= 10; i++){
    const result = number * i;
    console.log(number, " X ", i, " = ", result);
}

//Separator
console.log("---------------");

//Cycle "while"
console.log("Cycle \"While\"");

let i = 1;

while (i <= 10){
    const result = number * i;
    console.log(number, " X ", i, " = ", result);
    i++;
}