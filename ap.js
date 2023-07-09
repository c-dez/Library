let myLibrary =[]
//user inputs .container-input
const titleInput = document.querySelector('.container-input>.input-title')
const authorInput =document.querySelector('.input-author')
const pagesInput =document.querySelector('.input-pages')
//paso variables a su value
let title = titleInput.value;
let author = authorInput.value
let pages = pagesInput.value;

// const read =document.querySelector('.input-read')


const btn_add_book = document.querySelector('.container-input>.btn-add-book')
const a = document.querySelector('.a')
//list .container-library
const ul = document.querySelector('.container-library>ul')


function Book(title, author, pages, ){//pongo pendiente el valor  read
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;


}


function addBookToLibrary(){
    myLibrary.forEach((item)=>{
        const li = document.createElement('li')
        li.textContent = item.title;
        ul.appendChild(li)
    })
}

btn_add_book.addEventListener('click', ()=>{
    if(titleInput.value !=''){
         title = titleInput.value;   
         author = authorInput.value
         pages = pagesInput.value;
        pushObjToLibrary(title, author, pages)



        myLibrary.push(title.value)
        console.table(myLibrary)
        title.value ='';

    }
})
// let book;
let arrayT = []
function pushObjToLibrary(title, author, pages){
   let book = new Book(title,author,pages)
   myLibrary.push(book);
}
