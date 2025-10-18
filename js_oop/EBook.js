// Creation of EBook class inherited from Book
import Book from "./Book.js";

export default class EBook extends Book {
    constructor(title, author, year, bookFormat) {
        super(title, author, year);
        this._bookFormat = bookFormat;
    }

    printInfo(){
        console.log("Book:", this.title, "\nAuthor:",this.author, "\nYear:", this.year, "\nFormat:", this.bookFormat, "\n");
    }

    get bookFormat() {
        return this._bookFormat;
    }

    set bookFormat(format) {
        const allowedFormats = ["PDF", "EPUB", "MOBI", "FB2"];

        if (!allowedFormats.includes(format.toUpperCase())) {
            console.log(`Unsupported book format: ${format}. Allowed formats: ${allowedFormats.join(", ")}`);
            return;
        }
        this._bookFormat = format.toUpperCase();
    }

    static makeEBookFromBook(book, format) {
        // Validate that book is instance of Book
        if (!(book instanceof Book))
            return  console.log("The argument must be an instance of Book.");

        // Validate provided formats
        const allowedFormats = ["PDF", "EPUB", "MOBI", "FB2"];

        if (!allowedFormats.includes(format.toUpperCase()))
            return console.log(`Unsupported book format: ${format}. Allowed formats: ${allowedFormats.join(", ")}`);

        return new EBook(book.title, book.author, book.year, format);
    }
}

