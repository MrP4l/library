let addBook = document.getElementById("addInput");
let title = document.getElementById("bookTitleInput");
let author = document.getElementById("authorInput");
let pages = document.getElementById("pagesInput");
let read = document.getElementById("readInput");
let myLibrary = [];



addBook.addEventListener("click", preventSubmitting);
function preventSubmitting(event) {
  event.preventDefault();
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
}

addBook.addEventListener("click", () => {
  /*myLibrary.push(title.value, author.value, pages.value, read.value)
  console.log(myLibrary)*/

});

function addBookToLibrary() {
}



