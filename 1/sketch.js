function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    let x = 10;
    rcolor = color(random(0, 50));
    stroke(rcolor);
    for (let x = 0; x < width; x = x + 10) {
        for (let y = 0; y < height; y = y + 10)
            line(x, y, width - 20, height - 20);
    }

}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}