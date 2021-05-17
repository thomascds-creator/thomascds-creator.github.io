

let newbook = document.querySelector('#newbook');
let table = document.getElementById('table');
let subbutton = document.getElementById('subbutton');
let clsselector = document.querySelector('.flexer');
let form = document.querySelector('#form');



newbook.onclick = function(){
    
   
    form.style.display = 'block';
    clsselector.style.display = 'flex';
    
}

subbutton.onclick = function(){
    
    
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let isread = document.querySelector('#isread').value;
   
    
    let readstatus = document.createElement('button');
    readstatus.style.marginLeft ='0px';
    readstatus.textContent = 'read';
    
    let closebook = document.createElement('button');
    closebook.style.marginLeft ='20px';
    closebook.textContent = 'delete';
    
    
    
    let books = [title,author,pages,isread];
    
    let tablerow = document.createElement('tr');
    let tabledata1 = document.createElement('td');
    let tabledata2 = document.createElement('td');
    let tabledata3 = document.createElement('td');
    let tabledata4 = document.createElement('td');
   
   
    
    let tabledata = [tabledata1,tabledata2,tabledata3,tabledata4];
    
    
    

    
    function displaybooks(tabledata,books){
       
        for(let i = 0; i < tabledata.length; i++){
               
            tabledata[i].textContent = books[i];
            tablerow.appendChild(tabledata[i]);
            table.appendChild(tablerow);
           
        }
        tabledata[4] = readstatus;
        tablerow.appendChild(tabledata[4])
        table.appendChild(tablerow);
        
        tabledata[5] = closebook;
        tablerow.appendChild(tabledata[5])
        table.appendChild(tablerow);
        
    }
    readstatus.onclick = function(){
        
        if(tabledata[3].textContent === 'yes'){
            tabledata[3].textContent = 'no';
        }
        else if(tabledata[3].textContent === 'no' || tabledata[3].textContent === 'none' ){
            tabledata[3].textContent = 'yes';   
        }
        
    }
    
    closebook.onclick = function(){
        
        table.removeChild(tablerow);
    }
    
    displaybooks(tabledata,books)
    
    form.style.display = 'none';
    clsselector.style.display = 'none';

}













