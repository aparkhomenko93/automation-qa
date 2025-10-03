// Creation of object
const book = {
    title: "JavaScript for dummies",
    author: "Emily A. Vander Veer",
    year: "2014"
};

// Object destructuring
const {title: bookName, author: writtenBy} = book;

// Show result in console
console.log("Book name:", bookName, "\nAuthor:", writtenBy);