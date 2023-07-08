let myLibrary =['uzumaki', '100', ]
//user inputs .container-input
const input_text = document.querySelector('.container-input>.input-book')
const btn_add_book = document.querySelector('.container-input>.btn-add-book')

//list .container-library
const ul = document.querySelector('.container-library>ul')


function Book(){

}

function addBookToLibrary(){
    myLibrary.forEach((item)=>{
        const li = document.createElement('li')
        li.textContent = item;
        ul.appendChild(li)
    })
}
