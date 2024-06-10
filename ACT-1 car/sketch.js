function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(197, 217, 225);

  //if u want to colour the specific colour
  fill(249, 232, 21);
  //rect fo rectangle (x, y, width, height )
  rect(100, 145, 200, 55, 3); //top
  rect(50, 200, 300, 76, 10); //bottom

  //wheels
  //ellipse (x, y, width, height)
  fill(0, 0, 0);
  ellipse(100, 270, 50, 50); //left wheel
  ellipse(300, 270, 50, 50); //right wheen
  // center part
  fill(255, 0, 0);
  ellipse(100, 270, 20, 20); //left inner wheel
  ellipse(300, 270, 20, 20); //right inner wheel

  //roof
  //triangle (x1,y1, x2,   y2, x3,  y3 )
  triangle(100, 95, 300, 95, 200, 10);

  //   lines conecting
  //line(x1, y1, x2, y2)
  line(101, 145, 101, 95); // left
  line(200, 145, 200, 95); // mid
  line(298, 145, 298, 95); // right

  // balls  (x,   y, width height)
  fill(255, 244, 0222);
  //1st line circle
  ellipse(101, 100, 5, 5);
  ellipse(101, 128, 5, 5);
  //2nd line circle
  ellipse(200, 110, 5, 5);
  ellipse(200, 135, 5, 5);
  //3rdline circle
  ellipse(298, 143, 5, 5);
  ellipse(298, 114, 5, 5);

  //headlight
  fill(0, 0, 0);
  ellipse(350, 240, 10, 15);
  //window
  fill(255, 255, 255);
  rect(115, 152, 80, 40);
  rect(207, 152, 80, 40);

  // square(x, y, s,)
  // square(130, 150, 43);
}
