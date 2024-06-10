//for the audio
var song;

//for the mouse trail
let mouse = [];
let z = 0;

//adding a written message
let message = 'Welcome To Bath Spa University',
  fontsize = 32,
  x,
  y;

function preload(){ //for the background music
  song = loadSound("music.mpeg")
}

function setup() {
  createCanvas(windowWidth,windowHeight); //canvas size
  
  r = random(255);
  g = random(255);
  b = random(255);
  
  //for the audio
  song.play();

  //for the lines
  a = 70;
  b = 450;
  c = 505;
  d = 30;
  
  e = 90;
  f = 40;
  g = 405;
  h = 350;
  
  //for the size and layout of the written text
  textSize(fontsize);
  x = width / 2 - textWidth(message) / 2;
  y = height / 2 - fontsize / 2;
  
  fill('white')  
}

function draw() {
  background('#130C2A');
  stroke(r, g, b);
  fill('white');
  
  //for the written text
  text(message, x, y);
  
  // for adding a tickle effect when mouse is over the text
  if (
    mouseX >= x &&
    mouseX <= x + textWidth(message) &&
    mouseY >= y - fontsize &&
    mouseY <= y
  ) {
    x += random(-1, 1);
    y += random(-1, 1);
  }
  
  //to add a glow effect
  drawingContext.shadowBlur=30;   
  drawingContext.shadowColor=color(r,g,b)
  
  //to make the lines thicker
  strokeWeight(3);
  
  //making the lines
  line(a,b,c,d);
  line(a,b,c,d);
  line(a,b,c,d);
  
  line(e,f,g,h);
  line(e,f,g,h);
  line(e,f,g,h);
  
  //to change the colour by pressing the spacebar
  if(keyIsPressed && keyCode==32){ //key code for spacebar is 32
  r = random(255);
  g = random(255);
  b = random(255);
  }
  
  //for adding a trail behind the mouse pointer 
  mouse.push([mouseX, mouseY]);
  for(let i = 0; i < mouse.length; i++) {
  noStroke();
  fill(255,255,255, z);
  ellipse(mouse[i][0], mouse[i][1], 8);
    if(z > 255) {
      mouse.shift();
      z = 0;
    }
    z += 8;
  }
}