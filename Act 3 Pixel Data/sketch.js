var img; //variable
function preload() {
  img = loadImage("leopard-6629858_1280.jpg"); //unsplash
}

function setup() {
  createCanvas(550, 400);
  background(0); //black
  img.resize(550, 400); //image size
}

function draw() {
  background(0);
  x = mouseX;
  y = mouseY;
  image(img, 0, 0);
  var c = get(x, y);
  fill(c);
  //size of the mover square
  rect(x, y, 50, 50);
}
