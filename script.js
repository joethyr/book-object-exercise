let myLibrary = [];
const table = document.querySelector("tbody");
const addBookBtn = document.querySelector(".add-book-btn");
const submitBookBtn = document.querySelector(".submit-book-btn");
const button = document.createElement("button");
const form = document.querySelector("form");

let checkboxAttributes = {
  type: "checkbox",
  class: "form-check-input",
  status: "unread",
};

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  deleteBookButton(row) {
    row.setAttribute("id", this.title);
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

  createCheckBox(row) {
    const inputTag = table
      .appendChild(row)
      .appendChild(document.createElement("th"))
      .appendChild(document.createElement("input"));
    inputTag.setAttribute("id", `${myLibrary.length}`);
    Object.keys(checkboxAttributes).forEach((attr) => {
      inputTag.setAttribute(attr, checkboxAttributes[attr]);
    });
    if (this.read == "read") {
      inputTag.checked = true;
    } else {
      inputTag.checked = false;
    }
    document
      .getElementById(`${myLibrary.length}`)
      .addEventListener("click", () => {
        this.read == "read" ? (this.read = "unread") : (this.read = "read");
      });
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  renderBook(book);
}

function renderBook(book) {
  const tableRow = document.createElement("tr");
  book.deleteBookButton(tableRow);
  for (const key in book) {
    if (book.hasOwnProperty(key)) {
      if (key == "read") {
        book.createCheckBox(tableRow);
        break;
      }

      table
        .appendChild(tableRow)
        .appendChild(document.createElement("th"))
        .appendChild(document.createTextNode(`${book[key]}`));
    }
  }
  document.querySelectorAll(".book-delete-button").forEach(function (row) {
    row.addEventListener("click", deleteBookfromLibrary);
    row.addEventListener("click", deleteBookfromDOM);
  });
}

function deleteBookfromLibrary(e) {
  let a = e.target.getAttribute("book");
  myLibrary.splice(
    myLibrary.findIndex((item) => item.read === a),
    1
  );
}

function deleteBookfromDOM(e) {
  let a = e.target.getAttribute("book");
  let b = document.getElementById(a);
  b.remove();
}

function createBook(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const arr = [];
  for (key of formData) {
    arr.push(key[1]);
  }
  newBook = new Book(...arr);
  addBookToLibrary(newBook);
  form.reset();
}

submitBookBtn.addEventListener("submit", createBook);

submitBookBtn.addEventListener("reset", () => {
  document.getElementById("bookForm").style.display = "none";
});
addBookBtn.addEventListener("click", () => {
  document.getElementById("bookForm").style.display = "block";
});

const hobbit = new Book("The Hobbit", "JRR Tolkien", 295, "read");
addBookToLibrary(hobbit);