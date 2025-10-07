// Creation of Book class
export default class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    printInfo(){
        console.log("Book:", this.title, "\nAuthor:",this.author, "\nYear:", this.year, "\n");
    }


    // Getters
    get title(){
        return this._title;
    }

    get author(){
        return this._author;
    }

    get year(){
        return this._year;
    }

    // Setters
    set title(title){
        if (typeof(title) !== "string" || title.length < 1)
            return "Book title must be a string and cannot be blank.";

        this._title = title;
    }

    set author(author){
        if (typeof(author) !== "string" || author.length < 1)
            return "Author must be a string and cannot be blank.";

        this._author = author;
    }

    set year(year){
        if (typeof(year) !== "number" || year < 1)
            return "Year must be a number and cannot be less or equal to 0.";

        this._year = year;
    }


    // Static method to return the oldest book
    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0)
            return console.log("Incorrect array of books.");


        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
}

