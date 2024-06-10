function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(204, 255, 255);

  // Body
  fill(100, 200, 100);
  //ellipse(200, 300, 150, 200);
  rect(150, 270, 100, 130, 20);

  // Head
  ellipse(200, 200, 120, 150);

  // Eyes
  fill(255);
  ellipse(175, 180, 30, 50);
  ellipse(225, 180, 30, 50);
  fill(0);
  ellipse(175, 180, 10, 20);
  ellipse(225, 180, 10, 20);

  // Antennas
  //stroke(100, 200, 100);
  //strokeWeight(4);
  fill(100, 200, 100);
  line(170, 133, 150, 80);
  line(230, 133, 250, 80);
 
  ellipse(150, 80, 20, 20);
  ellipse(250, 80, 20, 20);

  // Mouth
  stroke(0);
  strokeWeight(2);
  //smile
  arc(200, 220, 60, 30, 0, PI);
}
