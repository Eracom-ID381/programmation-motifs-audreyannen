function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(200, 200, 4);
}

function draw() {
    let x = 100;
    rcolor = color(random(100, 180), random(10, 80), random(200, 255));
    stroke(rcolor);
    for (let x = 0; x < width; x = x + 10) {
        for (let y = 0; y < height; y = y + 5000)
            line(x, y, width, height);
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}