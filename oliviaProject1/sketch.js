var x = 0;          //global variables that will be used to control coordinates of main circle
var y = 0;

var d = 100;        

var ellipses = [];   //array of circles


function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(5);
  smooth();

  for (var i = 0; i < 50; i++) {                                      //initialize array of circles by storing circleGroup
    ellipses.push(new circleGroup(random(width), random(height)));    //object (defined below)
    //  println(ellipses[i]);
  }

}

function draw() {
  background(0, 153, 76);

  fill(0);                          
  ellipse(mouseX, mouseY, 30, 30);  //create main circle


  x = mouseX;           //main circle will be controlled by mouse location
  y = mouseY;

  for (var i = 0; i < ellipses.length; i++) {  //retreives all circleGroup objects from the array to call different functions on them
    fill(0); //black
    //println(ellipses[i].x);

    ellipses[i].create();  
    ellipses[i].repel(x, y);

    // ellipses[i].reset(random(width), random(height));
    // println(ellipses[i]);
    ellipses[i].move();

  }


}


function circleGroup(locX, locY) {      //circleGroup definition
  this.x = locX;    //elements of circleGroup object are defined
  this.y = locY;
  var diameter = 30;
  var speed = 1;    //reduced speed to 1 to make the sketch bearable to look at

  this.move = function() {            //adds motion to circles to make them look more "alive"
    this.x += random(-speed, speed);
    this.y += random(-speed, speed);
  }

  this.create = function() {                //creates circle shape
    ellipse(this.x, this.y, diameter, diameter);
  }

  this.repel = function(locX1, locY1) {     //when the main circle moves towards the other circles, the
    var x1 = locX1;                         //circles move away
    var y1 = locY1;

    var dis = int(dist(x1, y1, this.x, this.y));  //calculates the distance between the main circle and the current
    //println(dis);                               //circleGroup object

    /*
    this.x += dis;
    this.y += dis;
   
    if (dis >= 50) {
      this.x -= dis;
      this.y -= dis;
    }
    */


    if (dis > 30 && dis <= 50) {              //when the distance calculated above is only between 30 and 50,
      if (x1 < this.x && y1 < this.y) {       //move the current circleGroup object in the opposite direction
        this.x += speed;                      //at a speed of 1
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

    else if (dis > 50 && dis < 70) {            //otherwise, if the distance is between 50 and 70,
      if (x1 < this.x && y1 < this.y) {         //move the current circleGroup object back towards the
        this.x += -speed;                       //initial position at a speed of 1
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