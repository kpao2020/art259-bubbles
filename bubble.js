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
  