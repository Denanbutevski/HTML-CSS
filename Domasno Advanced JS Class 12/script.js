function Library(name, books, address){
    this.name = name;
    this.books = books;
    this.address = address;
    this.numberOfMembers = books.length*15;
    this.printBooks = () => {
        books.forEach(book => {
            console.log(book);
        });
    }
    this.addBook = addBook.bind(this);
}

function Book(title, genre, libraries, authors){
    this.title = title;
    this.genre = genre;
    this.libraries = libraries;
    this.authors = authors;
    this.addLibrary = addLibrary.bind(this);
    this.removeLibrary = removeLibrary.bind(this);
}

function Author(firstName, lastName, yearOfBirth){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.books = [];
    this.currentBook = null;
    this.startBook = startBook.bind(this);
}

function addLibrary(library){
    this.libraries.push(library);
    library.books.push(this);
}

function removeLibrary(library){
    this.libraries = this.libraries.filter(el=>el.name!==library.name);
    library.books = library.books.filter(book=>book.name!==this.name);
}

function startBook(book){
    if(this.currentBook && this.currentBook.title !== book.title){
        this.books.push(currentBook);
        this.currentBook = book;
    }else{
        this.books.push(book);
        this.currentBook = book;
    }
}

function addBook(book){
    this.books = Object.create(book);
}