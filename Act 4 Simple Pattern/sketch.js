let numX, numY; // Variables, tiles in (X,Y)
let modSize; // Variable,tile size

function setup() {
  //canva fills the window
  let cnv = createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100); //HSB color
  background(200, 50, 100);
  noStroke(); //no stroke shapes
  //no. of tiles in (X,Y)
  numX = 10;
  numY = 10;
  //tile size
  modSize = windowWidth / 10;
}

function draw() {
  background(200, 50, 100);

  //nested loops to create grid of tiles
  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {
      push(); //save the current state
      translate(x * modSize + modSize / 2, y * modSize + modSize / 2); //move the origin to center of tile
      let n = int(random(0, 4)); //randomly integer btw 0 & 3
      rotate(radians(n * 90)); //rotate tile by 90 degrees
      drawTile();
      pop();
    }
  }
  noLoop(); //stop loop
}

function mousePressed() {
  loop(); //restart when mouse is pressed
}

/*-------Tile Pattern-------*/
function drawTile() {
  //random color for first triangle
  fill(random(360), 80, 100);
  beginShape();
  vertex(-modSize / 2, -modSize / 2); //1st vertex
  vertex(modSize / 2, -modSize / 2); //2nd vertex
  vertex(0, modSize / 2); //3rd vertex
  endShape(CLOSE);

  fill(random(360), 80, 80); //random color for 2nd triangle
  beginShape(); //custom shape
  vertex(-modSize / 2, modSize / 2); //3rd vertex
  vertex(modSize / 2, modSize / 2); //2nd vertex
  vertex(0, -modSize / 2); //3rd vertex
  endShape(CLOSE);

  noFill(); //no color lines
  stroke(0, 0, 50, 50); //stroke
  line(-modSize / 2, 0, modSize / 2, 0); //horizontal line
  line(0, -modSize / 2, 0, modSize / 2); //vertical line
  noStroke(); //no stroke shapes
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize window
}
