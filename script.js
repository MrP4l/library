let addBook = document.getElementById("addInput");
let title = document.getElementById("bookTitleInput");
let author = document.getElementById("authorInput");
let pages = document.getElementById("pagesInput");
let read = document.getElementById("readInput");
let deleteAll = document.getElementById("deleteAll");
let totalBooks = document.getElementById("totalBooks");
let booksRead = document.getElementById("booksRead");
let myLibrary = [];
let values = [];
let temporaryValues = [];
 
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
        read.value = "X"
    } else
    {
        read.value = ""
    }
}
 
function addBookToArray() {
    addBook.addEventListener("click", () => {
        isChecked()
        var newBook = new Book(title.value, author.value, pages.value, read.value);
        myLibrary.push(newBook);
    //    console.log(myLibrary);
    });
}
 
function clearTheFields() {
    addBook.addEventListener("click", () => {
        title.value = "";
        author.value = "";
        pages.value = "";
        read.checked = false;
        addBookToLibrary();
    })
}
 
function deleteAllBooks() {
    deleteAll.addEventListener("click", () => {
        myLibrary.length = 0;
        console.log(myLibrary);
    });
}
 
function numbersOfBooks() {
    addBook.addEventListener("click", () => {
        booksAdded();
        howManyBooksRead();
        howManyBooksNotRead();
    })
}
 
function booksAdded() {
//      isChecked();
        let howManyBooks = myLibrary.length;
        totalBooks.innerHTML = `Total Books: ${howManyBooks}`;
}
 
function howManyBooksRead() {
    // To Adjust
/*    
        let howMany = 0;
        myLibrary.forEach((element) =>
        {
            if (element.read == "X"){
                howMany =+ howMany + 1
            }else
            {
                howMany =+ howMany + 0
            }
        }
        )
        booksRead.innerHTML = `Read: ${howMany}`;
        */
}
 
function howManyBooksNotRead() {
 
}

function addBookToLibrary() {
    values = [];
    let lastFourValues = [];
    myLibrary.forEach((element) => {
        lastFourValues = [];
        values.push(element.title, element.author, element.pages, element.read);
        lastFourValues.push(element.title, element.author, element.pages, element.read);
    })        
    console.log(myLibrary, "Oggetti");
    console.log(values, "valori array");
    console.log(lastFourValues, "ultimi 4 val")
    
    const parentItem = document.createElement("div");
    parentItem.classList.add("parentItem");
    contentContainer.appendChild(parentItem);

    for (let i = 0; i < 4; i++){
        const div = document.createElement("div");
        div.classList.add("item");
        parentItem.appendChild(div);
    }
};
 
function clearTheDisplay() {
    document.querySelectorAll('.parentItem').forEach(e => e.remove());
}
 
addBookToArray();
clearTheFields();
deleteAllBooks();
numbersOfBooks();