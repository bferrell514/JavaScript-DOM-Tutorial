const list = document.querySelector('#book-list ul');

//deletes books from the page
list.addEventListener('click', function(e){
if(e.target.className == 'delete') {
    //grabs the parent above the li in the #book-list
    const li = e.target.parentElement;
    
    //removes the chilf to the parent node
    list.parentNode.removeChild(li);
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
    const value = addForm.querySelector('input[type="text"]');

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
