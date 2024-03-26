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

class Bubble {
  constructor(tempX, tempY, tempR, tempB) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.brightness = tempB;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  rollover(px, py) {
    let d = dist(px, py, this.x, this.y);

    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness);
    ellipse(this.x, this.y, this.r * 2);
  }
}
