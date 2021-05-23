
window.onload = () => {
    
    alert("press the keys as shown in the drum kit:-'A,S,D,F etc to play the sound' ");
    prompt('enter yes to proceed');
}

window.addEventListener("keydown",function(e){
    try {
        let key = document.querySelector(`audio[data-key = "${e.keyCode}"]`);

        let keytrans = document.querySelector(`div[data-key = "${e.keyCode}"]`);

        if (!keytrans) {
            return;
        }
        keytrans.style.borderColor = 'green';
        keytrans.style.backgroundColor = 'green';
        keytrans.style.transform = 'scale(4,4)';
        if (!key) {
            return;
        }


        key.currentTime = 0;
        key.play();
    } catch (Error) {
        console.log(Error.message)
    }
    
    
   
})


window.addEventListener("keyup",function(e){
       try {
           let keytrans2 = document.querySelector(`div[data-key = "${e.keyCode}"]`);

           if (!keytrans2) {
               return;
           }
           keytrans2.style.borderColor = 'white';
           keytrans2.style.backgroundColor = 'transparent';
           keytrans2.style.transform = 'scale(1,1)';
       } catch (Error) {
           console.log(Error.message)
       }
       

    
})
