const list = document.querySelector('#book-list ul');

//deletes books from the page
list.addEventListener('click', function(e){
if(e.target.className == 'delete') {
    //grabs the parent above the li in the #book-list
    const li = e.target.parentElement;
    
    //removes the chilf to the parent node
    list.removeChild(li);
    }
});

//add book list
//stop from reloading the page when you click add 
//referencing the book
const addForm = document.forms['add-book'];

//add the event listener to the submit and prevent the default
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    //The input to the given field
    const value = addForm.querySelector('input[type ="text"]').value;

    //created elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;
    
    //apend span to document
    //PS ORDER MATTERS
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

});

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  //going through the array of books
  Array.from(books).forEach((book) => {
    //comparing to see if the word seached matches the words from the array
    const title = book.firstElementChild.textContent;
    //if it matches displaying it in block and if not displaying none
    if(title.toLowerCase().indexOf(e.target.value) != -1){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});
