var audio1 = new Audio("sounds/crash.mp3")

for (i = 0 ; i < 7;i++)
    {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){ 
        var buttonhtml = this.innerHTML;
        makesound(buttonhtml);
        animation(buttonhtml);
    })
    }
    


    document.addEventListener("keypress", function(event){
        var key = event.key;
        makesound(key);
        animation(key);
        ;})



    function makesound(key){
        switch (key) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "a":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
                        
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
                
            default: console.log(buttonhtml)
                break;
        }
     };
    
     function animation(butt) {
        var actbut = document.querySelector("." + butt);
        actbut.classList.add("pressed");
        setTimeout(function(){actbut.classList.remove("pressed")},100)
     }