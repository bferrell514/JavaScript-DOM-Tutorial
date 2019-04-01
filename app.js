const list = document.querySelector('#book-list ul');

//deletes books from the page
list.addEventListener('click', function(e){
    if(e.target.className == 'delete') {
        //grabs the parent above the li in the #book-list
        const li = e.target.parentElement;
        
        //removes the chilf to the parent node
        list.parentNode.removeChild(li)
    }
})
