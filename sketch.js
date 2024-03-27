let bubbles = [];

function setup() {
  var canvas = createCanvas(600, 400);
  canvas.parent('project');
}

function mouseDragged() {
    let x = random(width);
    let y = random(height);
    let r = 40;

    let b = new Bubble(mouseX, mouseY, r, 0);
    bubbles.push(b);
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].rollover(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }

    bubbles[i].move();
    bubbles[i].show();
  }
  
  if (bubbles.length > 10) {
    bubbles.splice(0, 1);
  }
}

