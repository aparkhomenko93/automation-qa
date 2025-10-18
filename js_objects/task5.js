// Creation of array of objects
const users = [
    {
        name: "Taras",
        email: "taras@example.com",
        age: 20
    },
    {
        name: "Olga",
        email: "olga@example.com",
        age: 25
    },
    {
        name: "Maryna",
        email: "maryna@example.com",
        age: 32
    }
];

// Show result in console using for ... of
for (const user of users) {
    console.log(user);
}

// Destructuring with cycle
for (const {name, email, age} of users){
    console.log( "---------------", "\nName is:", name, "\nEmail is:" , email, "\nAge is:" , age);
}