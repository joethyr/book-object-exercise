let myLibrary = [];
const table = document.querySelector("tbody");
const addBookBtn = document.querySelector(".add-book-btn");
const submitBookBtn = document.querySelector(".submit-book-btn");
const button = document.createElement("button");
const form = document.querySelector("form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  alert(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`);
};

Book.prototype.info = function () {
  alert(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`);
};

Book.prototype.deleteBookButton = function (row) {
  // row.setAttribute("book", `${this.title} by ${this.author}`)
  let deleteButton = table
    .appendChild(row)
    .appendChild(document.createElement("th"))
    .appendChild(document.createElement("button"));
  deleteButton.innerHTML = "delete book";
  deleteButton.classList.add(
    "btn",
    "btn-danger",
    "btn-sm",
    "book-delete-button"
  );
  deleteButton.setAttribute("book", this.title);
};

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBook(book);
}

function displayBook(book) {
  const tableRow = document.createElement("tr");
  book.deleteBookButton(tableRow);
  for (const key in book) {
    if (book.hasOwnProperty(key)) {
      const tableHeader = document.createElement("th");
      const thText = document.createTextNode(`${book[key]}`);
      table.appendChild(tableRow).appendChild(tableHeader).appendChild(thText);
    }
  }
  document
    .querySelectorAll(".book-delete-button")
    .forEach((row) => row.addEventListener("click", deleteBookfromLibrary));
}

addBookBtn.addEventListener("click", () => {
  document.getElementById("bookForm").style.display = "block";
});

submitBookBtn.addEventListener("submit", createBook);

function createBook(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const arr = [];
  for (key of formData) {
    arr.push(key[1]);
  }
  console.log(...arr);
  newBook = new Book(...arr);
  addBookToLibrary(newBook);
  form.reset();
}
submitBookBtn.addEventListener("reset", () => {
  document.getElementById("bookForm").style.display = "none";
});

function deleteBookfromLibrary(e) {
  let a = e.target.getAttribute("book");
  console.log(a);
  myLibrary.splice(
    myLibrary.findIndex((item) => item.title === a),
    1
  );
}

const hobbit = new Book("The Hobbit", "JRR Tolkien", 295, "yes");
addBookToLibrary(hobbit);