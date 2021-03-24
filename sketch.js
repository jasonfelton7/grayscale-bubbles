let circleX;
let circleY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    frameRate(7);
}

function draw() {

    circleX = random(width);
    circleY = random(height);

    fill(random(256));
    circle(circleX, circleY, 50, 50);
}