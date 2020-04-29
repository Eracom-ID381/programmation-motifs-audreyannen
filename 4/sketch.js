function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(0);
}

function draw() {
    let x = 20;
    stroke(255);
    for (let x = 0; x < width; x = x + 300) {
        for (let y = 0; y < height; y = y + 20)
            line(x, y, width, height);
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}