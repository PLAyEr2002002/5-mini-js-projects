const body= document.getElementsByTagName('body')[0];

function setColor(color) {
    body.style.backgroundColor = color;
}

function randomColor() {
    red = Math.round(Math.random()*255)
    
    green = Math.round(Math.random()*255)
    blue = Math.round(Math.random()*255)

    const color= `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = color
}

