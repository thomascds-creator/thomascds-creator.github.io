


window.addEventListener("keydown",function(e){
    
    
    let key = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    
    
//    let keytrans = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    
    
    if(!key){return;}
    
   
    
    key.currentTime = 0;
    key.play();
    
    
   
   
})


window.addEventListener("keyup",function(e){
                        
       let keytrans = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    
       if(!keytrans){return;}
       

    
})