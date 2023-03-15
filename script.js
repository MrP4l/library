let addBook = document.getElementById("addInput");
let title = document.getElementById("bookTitleInput");
let author = document.getElementById("authorInput");
let pages = document.getElementById("pagesInput");
let read = document.getElementById("readInput");
let deleteAll = document.getElementById("deleteAll");
let totalBooks = document.getElementById("totalBooks");
let booksRead = document.getElementById("booksRead");
let booksNotRead = document.getElementById("booksNotRead");
let myLibrary = [];

 
function preventSubmit() {
    addBook.addEventListener("click", preventSubmitting);
    function preventSubmitting(event) {
      event.preventDefault();
    }
}

preventSubmit()
 
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
 
function isChecked(){
    if (read.checked){
        read.value = "Yes"
    } 
    else
    {
        read.value = "Nope"
    }
}
 
function addBookToArray() {
    addBook.addEventListener("click", () => {
        if (title.value != "" || author.value != ""){
            isChecked()
            var newBook = new Book(title.value, author.value, pages.value, read.value);
            myLibrary.push(newBook);
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
 
function deleteAllBooks() {
    deleteAll.addEventListener("click", () => {
        myLibrary = [];
        clearTheDisplay()
        numbersOfBooks()
    });
}
 
function numbersOfBooks() {
    booksAdded();
    howManyBooksRead();
    howManyBooksNotRead();
}
 
function booksAdded() {
//     isChecked();
    let howManyBooks = myLibrary.length;
    totalBooks.innerHTML = `Total Books: ${howManyBooks}`;
}

function howManyBooksRead() {
    let howMany = 0;

    myLibrary.forEach((element) =>
    {
        if (element.read == "Yes"){
            howMany =+ howMany + 1
        }
    }
    )
    booksRead.innerHTML = `Read: ${howMany}`;
}
 
function howManyBooksNotRead() {
    let howMany = 0;
    myLibrary.forEach((element) =>
    {
        if (element.read == "Nope"){
            howMany =+ howMany + 1
        }
    }
    )
    booksNotRead.innerHTML = `Not read: ${howMany}`;
}

let values = [];
function addBookToLibrary() {
    values = [];
    let lastFourValues = [];
    myLibrary.forEach((element) => {
        lastFourValues = [];
        values.push(element.title, element.author, element.pages, element.read);
        lastFourValues.push(element.title, element.author, element.pages, element.read);
    })        
    
    const parentItem = document.createElement("div");
    parentItem.classList.add("parentItem");
    contentContainer.appendChild(parentItem);

    for (const val of lastFourValues){
        const div = document.createElement("div");
        div.classList.add("item");
        parentItem.appendChild(div);
        div.innerHTML = val;
    }
};
 
function clearTheDisplay() {
    document.querySelectorAll('.parentItem').forEach(e => e.remove());
}

addBookToArray();
deleteAllBooks();