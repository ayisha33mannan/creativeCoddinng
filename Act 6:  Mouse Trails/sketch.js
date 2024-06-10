let trail = [];

function setup() {
  //canvas fills window
  createCanvas(windowWidth, windowHeight); 
  background(0); 
  strokeWeight(2); //thickness
}

function draw() {
  background(0, 50); //fading effect

  //mouse position
  trail.push({ x: mouseX, y: mouseY });

  //limit length of trail
  if (trail.length > 50) {
    trail.shift();
  }

  //lines connecting the points
  for (let i = 0; i < trail.length - 1; i++) {
    let pos1 = trail[i];
    let pos2 = trail[i + 1];
    //hue based on position in the trail
    let hue = map(i, 0, trail.length, 0, 360); 
    stroke(hue, 100, 100, 255);
    line(pos1.x, pos1.y, pos2.x, pos2.y); 
    //line between consecutive points
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize window
}
