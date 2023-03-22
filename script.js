let addBook = document.getElementById("addInput");
let title = document.getElementById("bookTitleInput");
let author = document.getElementById("authorInput");
let pages = document.getElementById("pagesInput");
let read = document.getElementById("readInput");
let deleteAll = document.getElementById("deleteAll");
let totalBooks = document.getElementById("totalBooks");
let booksRead = document.getElementById("booksRead");
let booksNotRead = document.getElementById("booksNotRead");

(function preventSubmit() {
  addBook.addEventListener("click", preventSubmitting);
  function preventSubmitting(event) {
    event.preventDefault();
  }
})();

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function isChecked() {
  if (read.checked) {
    read.value = "Yes";
  } else {
    read.value = "Nope";
  }
}

let myLibrary = [];
let id = 0;
function addBookToArray() {
  addBook.addEventListener("click", () => {
    if (title.value != "" || author.value != "") {
      isChecked();
      var newBook = new Book(
        title.value,
        author.value,
        pages.value,
        read.value
      );
      myLibrary.push(newBook);
      id += 1;
      newBook["id"] = id;
      clearTheFields();
      numbersOfBooks();
    }
  });
}

function clearTheFields() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = true;
  addBookToLibrary();
}

let values = [];
function addBookToLibrary() {
  values = [];
  let lastFourValues = [];
  myLibrary.forEach((element) => {
    lastFourValues = [];
    values.push(element.title, element.author, element.pages, element.read);
    lastFourValues.push(
      element.title,
      element.author,
      element.pages,
      element.read
    );
  });

  const parentItem = document.createElement("div");
  parentItem.classList.add("parentItem");
  const contentContainer = document.getElementById("contentContainer");
  contentContainer.appendChild(parentItem);

  for (const val of lastFourValues) {
    const div = document.createElement("div");
    div.classList.add("item");
    parentItem.appendChild(div);
    div.innerHTML = val;
  }

  const removeButton = document.createElement("div");
  removeButton.classList.add("removeButton");
  parentItem.appendChild(removeButton);
  parentItem.dataset.bookId = id;
  removeButton.innerHTML = "&#x2716";
  removeBook();
}

let ind = 0;
function removeBook() {
  const removeButtons = document.querySelectorAll(".removeButton");
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", () => {
      const parentItem = removeButton.closest(".parentItem");
      ind = parseInt(parentItem.dataset.bookId);
      parentItem.remove();
      myLibrary.forEach((element) => {
        if (ind == element.id) {
          const indexToDelete = myLibrary.findIndex(
            (newBook) => newBook.id === ind
          );
          myLibrary.splice(indexToDelete, 1);
          numbersOfBooks();
        }
      });
    });
  });
}

function deleteAllBooks() {
  deleteAll.addEventListener("click", () => {
    myLibrary = [];
    clearTheDisplay();
    numbersOfBooks();
  });
}

function clearTheDisplay() {
  document.querySelectorAll(".parentItem").forEach((e) => e.remove());
}

function numbersOfBooks() {
  booksAdded();
  howManyBooksRead();
  howManyBooksNotRead();
}

function booksAdded() {
  let howManyBooks = myLibrary.length;
  totalBooks.innerHTML = `Total Books: ${howManyBooks}`;
}

function howManyBooksRead() {
  let howMany = 0;

  myLibrary.forEach((element) => {
    if (element.read == "Yes") {
      howMany += 1;
    }
  });
  booksRead.innerHTML = `Read: ${howMany}`;
}

function howManyBooksNotRead() {
  let howMany = 0;
  myLibrary.forEach((element) => {
    if (element.read == "Nope") {
      howMany += 1;
    }
  });
  booksNotRead.innerHTML = `Not read: ${howMany}`;
}

function clearTheDisplay() {
  document.querySelectorAll(".parentItem").forEach((e) => e.remove());
}

addBookToArray();
deleteAllBooks();
