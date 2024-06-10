let img;
let maskedImage;
let maskGraphics;

function preload() { //preload the load the image
  img = loadImage('autumn-7504818_1280.jpg'); 
}

function setup() {
  createCanvas(600, 400); //canvas cize
  
  // Create a graphics buffer for the mask
  maskGraphics = createGraphics(img.width, img.height);
  maskGraphics.fill(255); 
  maskGraphics.textSize(200);
  maskGraphics.textAlign(CENTER, CENTER);
  maskGraphics.text('HI', maskGraphics.width / 2, maskGraphics.height / 2);
  
  // Apply the mask to the image
  maskedImage = img.get();
  maskedImage.mask(maskGraphics);
}

function draw() {
  background(202, 167, 6); // background color
  
  // Calculate the position to center the image
  let x = (width - maskedImage.width) / 2;
  let y = (height - maskedImage.height) / 2;
  
  // Display the masked image at the calculated position
  image(maskedImage, x, y);
}
