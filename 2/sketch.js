function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(0);
    noStroke();
}

function draw() {
    rcolor = color(random(200, 255), random(0, 200), random(0, 255));
    fill(rcolor);
    for (let x = 10; x < width; x = x + 30) {
        for (let y = 0; y < height; y = y + 10)
            ellipse(x, y / 1, 20, 8);
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}