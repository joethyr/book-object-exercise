let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => `${title} by ${author}, ${295} pages, ${read}.`;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const hobbit = new Book("The Hobbit", "JRR Tolkien", 295, "finished reading");
addBookToLibrary(hobbit);

// function that loops through array and displays each book on the page.
// display them in a table
// use DOM manipulation

const table = document.querySelector("table");
const tableRow = document.createElement("tr");
const tableHeader = document.createElement("th");

let thText = document.createTextNode("BOOK VALUE");
table.appendChild(tableRow);
tableRow.appendChild(tableHeader);
tableHeader.appendChild(thText);
