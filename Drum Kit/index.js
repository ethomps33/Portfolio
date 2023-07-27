

for (var i=0 ;i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var clickedButton = this.innerHTML;
        switch (clickedButton) {
            case 'w':
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                buttonAnimation(clickedButton)
                break;
            case 's':
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                buttonAnimation(clickedButton)
                break;
            case 'a':
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                buttonAnimation(clickedButton)
                break;
            case 'd':
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play(); 
                buttonAnimation(clickedButton)
                break;
            case 'j':
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                buttonAnimation(clickedButton)
                break;
            case 'k':
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                buttonAnimation(clickedButton)
                break;
            case 'l':
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                buttonAnimation(clickedButton)
                break;
            default:
                console.log(this.innerHTML);
        
        }
   
    }
    );  

}
document.addEventListener("keypress", function(event) {
    var keyPressed =  event.key
    switch (keyPressed) {
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            buttonAnimation(keyPressed);
            break;
        case 's':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            buttonAnimation(keyPressed);
            break;
        case 'a':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            buttonAnimation(keyPressed);
            break;
        case 'd':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play(); 
            buttonAnimation(keyPressed);
            break;
        case 'j':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            buttonAnimation(keyPressed);
            break;
        case 'k':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            buttonAnimation(keyPressed);
            break;
        case 'l':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            buttonAnimation(keyPressed);
            break;
        default:
            console.log(this.innerHTML);}});

function buttonAnimation(currentKey) {

   var currentButton =  document.querySelector("." + currentKey);

   currentButton.classList.add("pressed");

   setTimeout(function(){
    currentButton.classList.remove("pressed");
   }, 150);
  


}