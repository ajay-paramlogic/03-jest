import { BookLibrary, Author, Book } from "./books-lib.js";

describe("BookLibrary", () => {
  let library;

  beforeEach(() => {
    library = new BookLibrary();
  });

  test("addAuthor adds an author to the library", () => {
    const author = new Author("John Doe");
    library.addAuthor(author);
    expect(library.authors).toContain(author);
  });

  test("addBook throws an error if the author is not in the library", () => {
    const book = new Book("Unknown Book", "Unknown Author", 2021);
    expect(() => library.addBook(book)).toThrow("Author not found");
  });

  test("addBook adds a book to the library", () => {
    const author = new Author("Jane Doe");
    const book = new Book("Sample Book", "Jane Doe", 2022);
    library.addAuthor(author);
    library.addBook(book);
    expect(library.books).toContain(book);
  });

  test("getBooksByAuthor returns books by a specific author", () => {
    const author1 = new Author("John Smith");
    const author2 = new Author("Alice Green");
    const book1 = new Book("Title One", "John Smith", 2020);
    const book2 = new Book("Title Two", "John Smith", 2021);
    const book3 = new Book("Title Three", "Alice Green", 2022);

    library.addAuthor(author1);
    library.addAuthor(author2);
    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);

    const booksByJohnSmith = library.getBooksByAuthor("John Smith");
    const booksByAliceGreen = library.getBooksByAuthor("Alice Green");

    expect(booksByJohnSmith).toHaveLength(2);
    expect(booksByAliceGreen).toHaveLength(1);
    expect(booksByJohnSmith).toEqual(expect.arrayContaining([book1, book2]));
    expect(booksByAliceGreen).toEqual(expect.arrayContaining([book3]));
  });

  test("getBooksByAuthor returns an empty array for an unknown author", () => {
    const booksByUnknownAuthor = library.getBooksByAuthor("Unknown Author");
    expect(booksByUnknownAuthor).toEqual([]);
  });

  test("Book title is a non-empty string", () => {
    const book = new Book("Title", "Author", 2021);
    expect(book.title).toBeTruthy();
    expect(book.title).not.toBeFalsy();
    expect(book.title).toMatch(/Title/);
  });

  test("Book publicationYear is a number", () => {
    const book = new Book("Title", "Author", 2021);
    expect(book.publicationYear).toBeDefined();
    expect(book.publicationYear).not.toBeUndefined();
    expect(book.publicationYear).toBe(2021);
    expect(book.publicationYear).not.toBeNaN();
  });
});
