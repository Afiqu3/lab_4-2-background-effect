for(let i = 1; i <= 503; i++){
    let box = document.createElement("div");
    box.classList.add("box");
    document.querySelector(".container").appendChild(box);
}

function animateBox(){
    let boxes = document.querySelectorAll(".box");
    let radNum = Math.floor(Math.random() * boxes.length);
    boxes[radNum].classList.toggle("animate");
}
setInterval(animateBox);