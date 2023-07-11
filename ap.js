const library =[
    {
        title: 'title',
        author: 'author',
        volume: 'volume',
        read: 'read',
    }
]

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const volume = document.querySelector('#volume')
const read = document.querySelector('#read')

const submit = document.querySelector('#submit')

//constructor
function Book(title, author, volume, read){
    this.title = title.value;
    this.author = author.value;
    this.volume = volume.value;
    this.read = read.value;
}

 
const ul = document.querySelector('ul')
//function creates a <li> in <ul> w text content of last item.title in array library
function addToLibrary(){
   let li = document.createElement('li');
   ul.appendChild(li)
   li.textContent= library[(library.length -1)].title
}
// addToLibrary()

function addToTable(){
    let table = document.querySelector('table')
    let tr = document.createElement('tr');
    let cell = document.createElement('td');
    let cell2 = document.createElement('td')
    let button = document.createElement('button')
    button.textContent = 'Erase'
    table.appendChild(tr)
    tr.appendChild(cell)
    tr.appendChild(cell2)
    tr.appendChild(button)
    cell.textContent = library[(library.length -1)].title;
    cell2.textContent = library[(library.length -1)].author;

}
// createBook()
function createBook(){
    let book = new Book(title, author, volume, read)
    library.push(book)
    addToTable()
    title.value = ''

}
submit.addEventListener('click', createBook)
   