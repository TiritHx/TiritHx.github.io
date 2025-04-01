const main_arrow = document.getElementById("arrow_main"); // arrows
const left_arrow = document.getElementById("arrow_left");
const right_arrow = document.getElementById("arrow_right");
const up_arrow = document.getElementById("arrow_up");
const down_arrow = document.getElementById("arrow_down");

const light_up = (element) => {
    element.style.transition = "0.3s";
    element.classList = "light_up";
    
}
