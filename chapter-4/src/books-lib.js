class BookLibrary {
  constructor() {
    this.books = [];
    this.authors = [];
  }

  addAuthor(author) {
    this.authors.push(author);
  }

  addBook(book) {
    if (!this.authors.some((author) => author.name === book.author)) {
      throw new Error('Author not found');
    }
    this.books.push(book);
  }

  getBooksByAuthor(authorName) {
    return this.books.filter((book) => book.author === authorName);
  }
}

class Author {
  constructor(name) {
    this.name = name;
  }
}

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
}

export { BookLibrary, Author, Book };
