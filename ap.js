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

let book = new Book(title, author, volume, read)
const ul = document.querySelector('ul')
//function creates a <li> in <ul> w text content of last item.title in array library
function addToLibrary(){
   let li = document.createElement('li');ul.appendChild(li)
   li.textContent= library[(library.length -1)].title
}
addToLibrary()
   