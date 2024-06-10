var img;
// Preload so it loads before the program starts
function preload() {
  img = loadImage(" Animal pictures of the week_ 29 May 2015 (1).jpg ");
}

function setup() {
  createCanvas(500, 500);
  background(0); //background black
  // Resize the image
  img.resize(500, 500);
}

function draw() {
  background(0); // Clear the black background
  //image at (0, 0)
  image(img, 0, 0);

  //mouseX position
  var v = map(mouseX, 0, width, 3, 20);

  // POSTERIZE filte & mapped value
  filter(POSTERIZE, v);
}
