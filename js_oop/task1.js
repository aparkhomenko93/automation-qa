import Book from "./Book.js";
import EBook from "./EBook.js";

// Task 1.1 - Book
console.log("Task 1.1. Instances of Book ------------------------");

const book1 = new Book("Brave new world", "Aldous Huxley", 1932);
const book2 = new Book("Fahrenheit 451", "Ray Bradbury", 1953);
const book3 = new Book("1984", "George Orwell", 1949);

book1.printInfo();
book2.printInfo();
book3.printInfo();

// Task 1.2 - EBook
console.log("Task 1.2. Instance of EBook ------------------------");

const eBook = new EBook("Хто не чув, той побачить", "Віталій Кличко", 2020, ".pdf");
eBook.printInfo();

// Task 1.3 - Getters and Setters
console.log("Task 1.3. Getters and Setters ------------------------");

// Book usage of Setters
book1.title = "Book: Changed title";
book1.author = "Book: Changed author";
book1.year = 12345;

// Book usage of Getters
console.log("GETTER Title:", book1.title);
console.log("GETTER Author:", book1.author);
console.log("GETTER Year:", book1.year, "\n");

// EBook usage of Setters
eBook.title = "EBook: Changed title";
eBook.author = "EBook: Changed author";
eBook.year = 12345;
eBook.bookFormat = "epub";

// EBook usage of Getters
console.log("GETTER Title:", eBook.title);
console.log("GETTER Author:", eBook.author);
console.log("GETTER Year:", eBook.year);
console.log("GETTER Format:", eBook.bookFormat);


// Task 1.4 - Return oldest Book
console.log("\nTask 1.4. Return an oldest book ------------------------");
const books = [book1, book2, book3, eBook];
console.log("The oldest book is:", Book.findOldestBook(books));

// Task 1.5 - Make EBook from Book
console.log("\nTask 1.5. Make EBook from Book ------------------------");
console.log("EBook made from Book:", EBook.makeEBookFromBook(book2, "pdf"));