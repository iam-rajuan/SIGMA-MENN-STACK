let boxes = document.querySelector(".container").children;

// box.style.backroundcolor = "blue"

// box.forEach(box => {
//     box.style.backgroundColor = "yellow"
    
// });

// document.querySelectorAll(".box").forEach(box => {
//     box.style.backgroundColor = "blue";
// });


function getRandomColor() {
    let val1 = Math.ceil(Math.random()*255)+1;
    let val2 = Math.ceil(Math.random()*255)+1;
    let val3 = Math.ceil(Math.random()*255)+1;
    return `rgb(${val1},${val2},${val3})`;
}

console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());


setInterval(()=>{
    Array.from(boxes).forEach(box => {
        box.style.backgroundColor = getRandomColor();
        box.style.color = getRandomColor();
    });
},100)