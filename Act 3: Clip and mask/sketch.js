let img;
let maskedImage;

function preload() { //preload the load the image
  img = loadImage('autumn-7504818_1280.jpg'); //  image 
}

function setup() {
  createCanvas(600, 400);
  
  // Create a graphics buffer
  let graphics = createGraphics(img.width, img.height);
  
  // Draw a smaller circle on the graphics buffer
  let circleDiameter = img.width / 3.5; // Adjust the diameter as needed
  graphics.ellipse(graphics.width / 2, graphics.height / 2, circleDiameter, circleDiameter);
  
  // Apply the mask to the image
  maskedImage = img.get();
  maskedImage.mask(graphics);
}

function draw() {
  background(230, 159, 26 ); //background color
  
  // Calculate the position to center the image
  let x = (width - maskedImage.width) / 2;
  let y = (height - maskedImage.height) / 2;
  
  // Display the masked image at the calculated position
  image(maskedImage, x, y);
}
