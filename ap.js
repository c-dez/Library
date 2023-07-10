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
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.read = read;

}
   