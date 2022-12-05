const myLibrary = [];
const table = document.querySelector("tbody");
const addBookBtn = document.querySelector(".add-book-btn");
const submitBookBtn = document.querySelector(".submit-book-btn");
const form = document.querySelector("form");

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
  displayBook(book);
}

function displayBook(book) {
  let tableRow = table.appendChild(document.createElement("tr"));
  for (const key in book) {
    if (book.hasOwnProperty(key)) {
      const tableHeader = document.createElement("th");
      let thText = document.createTextNode(`${book[key]}`);
      table.appendChild(tableRow).appendChild(tableHeader).appendChild(thText);
    }
  }
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





const hobbit = new Book("The Hobbit", "JRR Tolkien", 295, "yes");
addBookToLibrary(hobbit);
