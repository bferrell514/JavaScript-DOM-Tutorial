const bookList = document.querySelector('#book-list');

//The next sibling to the node
console.log("book-list next sibling is:", bookList.nextSibling);

//provides the next element to the node
console.log("book-list next sibling is:", bookList.nextElementSibling);

//The previous sibling to the node
console.log("book-list next sibling is:", bookList.previousSibling);

//provides the previous  element to the node
console.log("book-list next sibling is:", bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Too cool for everyone!';
