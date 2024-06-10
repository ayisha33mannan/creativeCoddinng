var img, x, y;
function preload() {
  // Preload, so it loads before the program starts
  img = loadImage(" laughing-kookaburra-8203554_1280.jpg ");
}

function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke(); // no stroke for shapes
}

function draw() {
  // Generate random (x,y) positions
  x = random(width);
  y = random(height);
  // Get the color at the random (x,y) position
  var c = img.get(x, y);
  //transparency
  fill(c[0], c[1], c[2], 50);
  // Draw an ellipse
  ellipse(x, y, 30, 30);
}
