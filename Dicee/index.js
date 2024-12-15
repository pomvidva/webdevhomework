
function rand(){
    var a = Math.floor((Math.random() * 6) +1);
    return a;
}

var p1 = rand();
var p2 = rand();





document.querySelector(".img1").setAttribute("src", 'images/dice' + p1 + '.png');
document.querySelector(".img2").setAttribute("src", 'images/dice' + p2 + '.png');

if (p1 >p2){
    document.querySelector("h1").textContent = "player 1 win";
}
else if (p2 >p1){
    document.querySelector("h1").textContent = "player 2 win";
}
else{
    document.querySelector("h1").textContent = "draw";
}