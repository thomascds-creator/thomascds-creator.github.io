

let newbook = document.querySelector('#newbook');
let subbutton = document.getElementById('subbutton');
let clsselector = document.querySelector('.flexer');
let inplacer = document.querySelector('#inplacer');
let form = document.querySelector('#form');

let count = 0;
window.onload = function(){
    alert("this is a book app:- 'to add a book click on the new book button' ");
}
newbook.onclick = function(){ 
    alert("success you did it :), 'now enter the title, author, pages  of a book you want to read or have read. Also enter yes/no if you have or have not read the book'");
   
    form.style.display = 'block';
    clsselector.style.display = 'flex';
    
}
function counter(){
           count = count + 1
           return count;
        }
subbutton.onclick = function(){
      alert('success, now to delete a book click delete,to change read status to yes/no click read')
      //table
      let table = document.createElement('table');
    
      //table rows
      let tablerow1 = document.createElement('tr');
      let tablerow2 = document.createElement('tr');
      let tablerow3 = document.createElement('tr');
      let tablerow4 = document.createElement('tr');
      let tablerow5 = document.createElement('tr');
      let tablerow6 = document.createElement('tr');
    
      let tablerows = [tablerow1,tablerow2,tablerow3,tablerow4];
    
      //extra features
      let readstatus = document.createElement('button');
      readstatus.textContent = 'read';
    
      let closebook = document.createElement('button');
      closebook.textContent = 'delete';
    
      //input data
      let title = document.querySelector('#title').value;
      let author = document.querySelector('#author').value;
      let pages = document.querySelector('#pages').value;
      let isread = document.querySelector('#isread').value;
      let countaction = counter();
    

      let books = [title,author,pages, isread];
      
      //book info
      let tabledatahead1 = document.createElement('td');
      let tabledatahead2 = document.createElement('td');
      let tabledatahead3 = document.createElement('td');
      let tabledatahead4 = document.createElement('td');
      let tabledatahead5 = document.createElement('td');
    
     
      //table data
      let tabledata1 = document.createElement('td');
      let tabledata2 = document.createElement('td');
      let tabledata3 = document.createElement('td');
      let tabledata4 = document.createElement('td');
      let tabledata5 = document.createElement('td');
      let tabledata6 = document.createElement('td');
      let tabledata7 = document.createElement('td');
      tabledata5.textContent = countaction;
    
      let tabledata = [tabledata1,tabledata2,tabledata3,tabledata4];
    
      tabledatahead1.textContent = 'book:';
      tabledatahead2.textContent = 'author:';
      tabledatahead3.textContent = 'pages read:';
      tabledatahead4.textContent = 'read status:';
      tabledatahead5.textContent = 'book number:';
      
      let tabledataheads = [tabledatahead1,tabledatahead2,tabledatahead3,tabledatahead4];
    
     
    
      function displaybooks(tabledata, books){
          for(let i = 0; i < books.length; i +=1){
              tabledata[i].textContent = books[i];
              tablerows[i].appendChild(tabledataheads[i]);
              tablerows[i].appendChild(tabledata[i]);
              table.appendChild(tablerows[i]);
          }
          tablerow5.appendChild(tabledatahead5);
          tablerow5.appendChild(tabledata5);
          tabledata6.appendChild(readstatus);
          tablerow6.appendChild(tabledata6);
          tabledata7.appendChild(closebook);
          tablerow6.appendChild(closebook);
          table.appendChild(tablerow5);
          table.appendChild(tablerow6);
      }
    
    

     
    
    readstatus.onclick = function(){
        alert('success you changed the read status');
        if(tabledata[3].textContent === 'yes'){
            tabledata[3].textContent = 'no';
        }
        else if(tabledata[3].textContent === 'no' || tabledata[3].textContent === 'none' ){
            tabledata[3].textContent = 'yes';   
        }
        
    }
    
    closebook.onclick = function(){
        alert('this book will no longer appear here');
        for(let i = 0; i < tablerows.length; i++){
            table.removeChild(tablerows[i]);
        }
        inplacer.removeChild(table);
    }
     
    table.style.margin = '0 auto';
    inplacer.appendChild(table);
    
    displaybooks(tabledata,books)
    form.style.display = 'none';
    clsselector.style.display = 'none';

}










