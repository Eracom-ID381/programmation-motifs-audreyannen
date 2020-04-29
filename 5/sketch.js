function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(0);
}

function draw() {
    for (let i = 0; i < width; i++) {
        let rcolor = random(100, 200);
        stroke(rcolor);
        line(i, 0, i, height);
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}