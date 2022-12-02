const myLibrary = [];
const table = document.querySelector("table");
const tableRow = document.createElement("tr");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.info = function () {
  alert(`${title} by ${author}, ${295} pages, ${read}.`);
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const hobbit = new Book("The Hobbit", "JRR Tolkien", 295, "finished reading");
addBookToLibrary(hobbit);

// function that displays books
myLibrary.forEach((book) => {
  for (const key in book) {
    if (book.hasOwnProperty(key)) {
      const tableHeader = document.createElement("th");
      let thText = document.createTextNode(`${hobbit[key]}`);
      table.appendChild(tableRow).appendChild(tableHeader).appendChild(thText);
    }
  }
});

// opens Book form
function openForm() {
  document.getElementById("bookForm").style.display = "block";
}

function bookFormInput() {
  alert("it works!");
  return false;
}
