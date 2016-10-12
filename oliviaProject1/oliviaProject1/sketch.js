var x = 0;
var y = 0;

var d = 100;

var ellipses = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(5);
  smooth();

  for (var i = 0; i < 50; i++) {
    ellipses.push(new circleGroup(random(width), random(height)));
    //  println(ellipses[i]);
  }

}

function draw() {
  background(0, 153, 76);

  // spiralRotate(90);
  fill(0);
  ellipse(mouseX, mouseY, 30, 30);


  x = mouseX;
  y = mouseY;

  for (var i = 0; i < ellipses.length; i++) {
    fill(0);
    //println(ellipses[i].x);

    //repel(x, y, ellipses[i].x, ellipses[i].y);

    ellipses[i].create();
    ellipses[i].repel(x, y);

    // ellipses[i].reset(random(width), random(height));
    // println(ellipses[i]);
    // ellipses[i].move();

  }


}


function circleGroup(locX, locY) {
  this.x = locX;
  this.y = locY;
  var diameter = 30;
  var speed = 1;

  this.move = function() {
    this.x += random(-speed, speed);
    this.y += random(-speed, speed);
  }

  this.create = function() {
    ellipse(this.x, this.y, diameter, diameter);
  }

  this.repel = function(locX1, locY1) {
    var x1 = locX1;
    var y1 = locY1;

    var dis = int(dist(x1, y1, this.x, this.y));
    //println(dis);

    /*
    this.x += dis;
    this.y += dis;
   
    if (dis >= 50) {
      this.x -= dis;
      this.y -= dis;
    }
    */


    if (dis > 30 && dis <= 50) {
      if (x1 < this.x && y1 < this.y) {
        this.x += speed;
        this.y += speed;
      } else if (x1 > this.x && y1 < this.y) {
        this.x += -speed;
        this.y += speed;
      } else if (x1 < this.x && y1 > this.y) {
        this.x += speed;
        this.y += -speed;
      } else if (x1 > this.x && y1 > this.y) {
        this.x += -speed;
        this.y += -speed;
      } else if (y1 > this.y && x1 == this.x) {
        this.y = -speed;
      } else if (y1 < this.y && x1 == this.x) {
        this.y = speed;
      } else if (x1 > this.x && y1 == this.y) {
        this.x = -speed;
      } else if (x1 < this.x && y1 == this.y) {
        this.x = speed;
      }

    }

    else if (dis > 50 && dis < 70) {
      if (x1 < this.x && y1 < this.y) {
        this.x += -speed;
        this.y += -speed;
      } else if (x1 > this.x && y1 < this.y) {
        this.x += speed;
        this.y += -speed;
      } else if (x1 < this.x && y1 > this.y) {
        this.x += -speed;
        this.y += speed;
      } else if (x1 > this.x && y1 > this.y) {
        this.x += speed;
        this.y += speed;
      } else if (y1 > this.y && x1 == this.x) {
        this.y = speed;
      } else if (y1 < this.y && x1 == this.x) {
        this.y = -speed;
      } else if (x1 > this.x && y1 == this.y) {
        this.x = speed;
      } else if (x1 < this.x && y1 == this.y) {
        this.x = -speed;
      }

    }
  }


  this.reset = function(locX, locY) {
    this.x = locX;
    this.y = locY;
  }


}