function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(100, 10, 200);
    noStroke();
}

function draw() {
    let x = 10;
    fill(10, 100, 200);
    while (x < width) {
        ellipse(x, height / 2, 50, 50);
        x = x + 50;
    }
    for (let x = 100; x < width; x = x + 10) {
        ellipse(x, height / 2, 50, 50)
    }
    for (let x = 600; x < width; x = x + 200) {
        ellipse(x, height / 2, 100, 100)
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}