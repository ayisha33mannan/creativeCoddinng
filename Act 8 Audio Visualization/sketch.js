// Initialize variables for microphone input and FFT
let mic, fft;
// Set initial visual mode to 0 
let visualMode = 0;

// initialize canvas, microphone, and FFT
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  // Initialize microphone input
  mic = new p5.AudioIn();
  mic.start();
  // Initialize FFT 
  fft = new p5.FFT();
  fft.setInput(mic);
}


function draw() {
  //semi-transparent background 
  background(0, 50);
  //audio spectrum
  let spectrum = fft.analyze();

  // visual mode,  call visualization function
  if (visualMode === 0) {
    radialVisual(spectrum);
  } else if (visualMode === 1) {
    barVisual(spectrum);
  } else if (visualMode === 2) {
    starVisual(spectrum);
  }
}

//to create radial visual representation of audio
function radialVisual(spectrum) {
  //to the center
  translate(width / 2, height / 2);
  // Loop spectrum
  for (let i = 0; i < spectrum.length; i++) {
    // Map angle and amplitude values
    let angle = map(i, 0, spectrum.length, 0, TWO_PI);
    let amp = spectrum[i];
    let r = map(amp, 0, 255, 50, 300);

    // Calculate x and y 
    let x = r * cos(angle);
    let y = r * sin(angle);

    //stroke color based on amplitude
    stroke(amp, 255, 255);
    // ellipse 
    ellipse(x, y, 10, 10);
  }
}

//to create bar visual representation of audio spectrum
function barVisual(spectrum) {
  // Loop through spectrum values
  for (let i = 0; i < spectrum.length; i++) {
    // Map x position and height values
    let x = map(i, 0, spectrum.length, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    // Set fill color based on index
    fill(i, 255, 255);
    // Draw rectangle at calculated position
    rect(x, height - h, width / spectrum.length, h);
  }
}

// Function to create star visual representation of audio 
function starVisual(spectrum) {
  //to the center
  translate(width / 2, height / 2);
  // Begin shape
  beginShape();
  // Loop spectrum values
  for (let i = 0; i < spectrum.length; i++) {
    // Map angle and amplitude values
    let angle = map(i, 0, spectrum.length, 0, TWO_PI);
    let amp = spectrum[i];
    let r = map(amp, 0, 255, 50, 300);

    // Calculate x and y 
    let x = r * cos(angle);
    let y = r * sin(angle);

    //stroke color based on amplitude
    stroke(amp, 255, 255);
    //vertex at calculated (X,Y)
    vertex(x, y);
  }
  //close shape
  endShape(CLOSE);
}

//switch Function 
function mousePressed() {
  // Increment visual mode and wrap around if exceeds maximum
  visualMode = (visualMode + 1) % 3;
}

// responsive resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}