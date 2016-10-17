var x = 0;          //global variables that will be used to control coordinates of main circle
var y = 0;


var ellipses = [];   //array of circles


function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(5);
  //smooth();

  for (var i = 0; i < 50; i++) {                                      //initialize array of circles by storing circleGroup
    ellipses.push(new circleGroup(random(width), random(height)));    //object (defined below)
    //  println(ellipses[i]);
  }
  noCursor();                                                        //hides mouse
}

function draw() {
  background(102, 0, 204); //purple
  
  noStroke();
  fill(160, 160, 160, 100); //gray                          
  ellipse(mouseX, mouseY, 30, 30);  //create main circle


  x = mouseX;           //main circle will be controlled by mouse location
  y = mouseY;

  push();
  for (var i = 0; i < ellipses.length; i++) {  //retreives all circleGroup objects from the array to call different functions on them
    fill(0, 0, random(100)); //change to different shades of blue
    //println(ellipses[i].x);

    ellipses[i].create();  
    ellipses[i].repel(x, y);

    // println(ellipses[i]);
    ellipses[i].move();

  }
  pop();


}


function circleGroup(locX, locY) {      //circleGroup definition
  this.x = locX;    //elements of circleGroup object are defined
  this.y = locY;
  var diameter = 30;
  var speed = 1;    //reduced speed to 1 to make the sketch bearable to look at

  this.move = function() {            //adds motion to circles to make them look more "alive"
    this.x += random(-0.5, 0.5);
    this.y += random(-0.5, 0.5);
  }

  this.create = function() {                //creates circle shape
    ellipse(this.x, this.y, diameter, diameter);
  }

  this.repel = function(locX1, locY1) {     //when the main circle moves towards the other circles, the
    var x1 = locX1;                         //circles move away
    var y1 = locY1;

    var dis = int(dist(x1, y1, this.x, this.y));  //calculates the distance between the main circle and the current
    //println(dis);                               //circleGroup object



    if (dis > 0 && dis <= 50) {              //when the distance calculated above is only between 0 and 50,
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
      
      push();
      noFill();
      stroke(255, 128, 0);
      translate(x1, y1);
      scale(1 +sin(frameCount*0.1)*0.15);     //using sin function in scale creates oscillating effect
      ellipse(0, 0, dis, dis);                //circle surrounding main gray circle (only appears when the distance
      pop();                                  //is between 0 and 50

    }

    else if (dis > 50 && dis < 60) {            //otherwise, if the distance is between 50 and 60,
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


}