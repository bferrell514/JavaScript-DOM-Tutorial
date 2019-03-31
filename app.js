const bookList = document.querySelector('#book-list');

//finding the parent node both do the same thing and return same element
console.log('the parent node is:', bookList.parentNode);

//secondary way to get the parent nodes
console.log('the parent node is:', bookList.parentElement);

//finds the parnet of of a parent
console.log('the parent node is:', bookList.parentElement.parentElement);

//pulls in the child nodes and the library as well
console.log(bookList.childNodes);

//grabbing the children nodes
console.log(bookList.children);
