
let moving = false
let guessAmount = 0
let array = [Math.floor(Math.random() * 9)]
let number = parseInt(array.join(''), 10)
document.getElementById('number').innerHTML = number

let speed = 10

function start(){
    document.getElementById('start').style.display = "none"
    document.getElementById('number').style.display = "block"
    document.getElementById('endScreen').style.display = "none"
    document.getElementById('number').innerHTML = number
    document.getElementById('input').value = ""
    document.getElementById('input').style.display = "none"
    document.getElementById('submit').style.display = "none"
    move()
    speed = 10
    
}

function move() {
    if (moving == false){
        moving = true;
        let timer = document.getElementById("timer");
        let width = 20;
        let interval = setInterval(frame, speed);
        function frame() {
            if(width <= 0){
                clearInterval(interval);
                moving = false;
                document.getElementById('input').style.display = "block"
                document.getElementById('submit').style.display = "block"
                document.getElementById('number').style.display = "none"
            } else {
                width -= 0.2;
                timer.style.width = width + "%"
            }
        }

    }
}




function submit(){
let inputValue = document.getElementById("input").value
    if(inputValue == number){
        guessAmount += 1
    
        array.push(Math.floor(Math.random() * 9))
        number = parseInt(array.join(''), 10)
        document.getElementById('number').innerHTML = number;
        document.getElementById('number').style.display = "block";
        document.getElementById('input').style.display = "none";
        document.getElementById('submit').style.display = "none";
        document.getElementById('input').value = "";
        move();
        speed += 2
    } else if(inputValue == ""){

    }
    else {
       
       document.getElementById('endScreen').style.display = "block"
       document.getElementById('guessAmount').innerHTML = guessAmount
       document.getElementById('lastNumber').innerHTML = number
       
       array = [Math.floor(Math.random() * 9)]
       number = parseInt(array.join(''), 10)
    }
}
