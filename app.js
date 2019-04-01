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
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]');
    console.log(value);
});
