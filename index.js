var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var innerButton = this.innerHTML;
    switch(innerButton){
        case "W":
            var audio = new Audio('sounds/tom-1.mp3');
audio.play();
        break;
        case "A":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "S":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;

        case "D":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;

        case "J":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        case "K":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case "L":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        default:
            console.log("button not found");
            break;
    }
                
    });
}

