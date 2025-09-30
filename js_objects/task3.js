// Creation of car1 object
const car1 = {
    brand: "Subaru",
    model: "Impreza WRX STI",
    year: 2003
};

// Creation of car2 object
const car2 = {
    brand: "Mitsubishi",
    model: "Lancer Evo VIII",
    owner: "Jeremy Clarkson"
};

// Destructuring
const car3 = {
    ...car1,
    ...car2
};

// Show result in console
console.log(car3);
