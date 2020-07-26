var canvas;
var hr;
var min;
var sec;
var end1;
var end2;
var end3;
function setup(){
    canvas = createCanvas(400,400);
    angleMode(DEGREES);
}

function draw(){
 background(0); 
 translate(200,200);
 rotate(-90);
  hr = hour();
  min = minute();
  sec = second();

  strokeWeight(8);
  noFill();
  stroke("pink");
  end1 = map(sec,0,60,0,360)
  arc(0,0,300,300,0,end1);
 

  stroke("blue");
  end2 = map(min,0,60,0,360)
  arc(0,0,280,280,0,end2);

  stroke("light green");
  end3 = map(hr % 12,0,12,0,360)
  arc(0,0,260,260,0,end3);

  push();
  rotate(end1);
  stroke("pink");
  line(0,0,100,0);
  pop();

  push();
  rotate(end2);
  stroke("blue");
  line(0,0,75,0);
  pop();

  push();
  rotate(end3);
  stroke("light green");
  line(0,0,50,0);
  pop();
  
  stroke("red");
  point(0,0);
}