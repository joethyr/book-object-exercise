function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => `${title} by ${author}, ${295} pages, ${read}.`;
}

const hobbit = new Book("The Hobbit", "JRR Tolkien", 295, "finished reading");
console.log(hobbit.info());
