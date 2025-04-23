/**
 * A preload() function exists specifically to load assets like images/files
 * before the page finishes loading. It looks like
 * 
 */ 
function preload() {
    wheek = loadSound("wheek.mp3");
}
/**
 * setup() runs ONE TIME when the page finishes loading
 */
var x;
var y;
var watermelons = 0;
var speedX;
var speedY;
function setup() {
    createCanvas(windowWidth-50, windowHeight-50);
    x = windowWidth/2
    y = windowHeight/2
    speedX = 0
    speedY = 0
    }
/**
 * draw() runs EVERY FRAME
 */
function draw() {
    clear()
    x = x + speedX
    y = y + speedY
    if(x>width || x<0){
        speedX = speedX*-1
    }
    if(y>height || y<0){
        speedY = speedY*-1
    }
    const snacc = document.getElementById('snacc');
    snacc.style.top = `${y}px`;
    snacc.style.left = `${x}px`;
    let pig=document.getElementById('pig');
    pig.style.left = (mouseX-30) + 'px';
    pig.style.top = (mouseY-15) + 'px';
    if(mouseX-30 <= x && mouseX+130>= x && mouseY-65 <= y && mouseY-15 >= y){
        userStartAudio();
        wheek.play();
        watermelons++;
        speedX++;
        speedY++;
        }
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text(`Score: ${watermelons}`, 50, 50)
}