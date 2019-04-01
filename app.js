var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click',function(e){
        
        
        const li = e.target.parentElement;
        //in order to remove the child you have to find the parent first
        li.parentNode.removeChild(li);
        
    });
    
});
//connecting to the page banner links I created for "netninja"
const link = document.querySelector('#page-banner a');

//logging the link will not be going to the link its connected to and provide message in log
link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('navigation to ', e.target.textContent, 'was prevented');
});
