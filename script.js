let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => `${title} by ${author}, ${295} pages, ${read}.`;
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const hobbit = new Book("The Hobbit", "JRR Tolkien", 295, "finished reading");
addBookToLibrary(hobbit);
