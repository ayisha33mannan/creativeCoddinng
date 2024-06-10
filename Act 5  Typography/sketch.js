let fonts = [
  "Georgia",
  "Helvetica",
  "Times",
  "Courier",
  "Verdana",
  "Arial",
  "Tahoma",
]; // List of fonts

function setup() {
  createCanvas(800, 400);
  background(220);

  // Draw the background
  drawBackground();

  // Draw the text
  drawTextWithRandomColors();
}

function drawBackground() {
  // Example background: diagonal stripes
  for (let x = 0; x < width; x += 20) {
    stroke(random(255), random(255), random(255), 100);
    //random colors
    strokeWeight(5); //strok thickness
    line(x, 0, x - width, height);
  }
}

function drawTextWithRandomColors() {
  let textToDisplay = "BATH SPA UNIVERSITY"; //text
  let maxWidth = width - 100; // Maximum width the text should occupy
  let textSizeValue = 50;

  textSizeValue = min(textSizeValue, maxWidth / textToDisplay.length);

  textSize(textSizeValue);

  // Randomly select a font
  let randomFont = random(fonts);
  textFont(randomFont);

  textAlign(CENTER, CENTER);

  let x = width / 2;
  let y = height / 2;

  // Draw each letter with a black fill and colorful borders
  for (let i = 0; i < textToDisplay.length; i++) {
    let char = textToDisplay.charAt(i);
    stroke(random(255), random(255), random(255)); //random colors
    strokeWeight(2);
    fill(0); // Black fill color
    text(char, x + (i - textToDisplay.length / 2) * textSizeValue, y);
  }
}
