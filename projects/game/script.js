const main_arrow = document.getElementById("arrow_main"); // arrows
const left_arrow = document.getElementById("arrow_left");
const right_arrow = document.getElementById("arrow_right");
const up_arrow = document.getElementById("arrow_up");
const down_arrow = document.getElementById("arrow_down");

const light_up = (element) => {
    element.style.transition = "0.3s";
    element.classList = "light_up";
    
}

const rotate_element = (element, direction) => {
    let deg = 0;
    switch(direction) {
        case "up":
            deg = 0;
            break;
        case "down":
            deg = 180;
            break;
        case "right":
            deg = 90;
            break;
        case "left":
            deg = 270;
            break;
        default:
            deg = 0;
            break;
    }
    element.style.transform = `rotate(${deg}deg)`;
}

const start = () => {} // https://www.w3schools.com/js/js_timing.asp ts gonna be fire in this
const stop = () => {game_state = 0} // something needs to be added there I can feel it

let game_state = 0;
document.getElementById("header").addEventListener("click", () =>{ //game logic
    if(game_state === 0){
        game_state = 1;
        start();
    }
    else{
        stop();
    }
});