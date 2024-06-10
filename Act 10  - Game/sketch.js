// Variable 
let balls = [];
let squares = [];
//scrore 
let score = 0;
let squareHits = 0;
let gameOver = false;
let gameStarted = false; 
let playButton; // starting page play button
let restartButton; //restart button
let hitSound;// hit sound
let backgroundMusic;//background music
let startImage; //starting page background image

function preload() {
  hitSound = loadSound("echoing-explosion-196259.mp3"); // hit sound
  backgroundMusic = loadSound("game-music-7408.mp3"); //background music
  startImage = loadImage("cover.jpg"); //background image
}

function setup() {
  createCanvas(600, 600);
//play button
  playButton = createButton('Play');
  styleButton(playButton);
  playButton.position(width / 2 - 40, height / 2 + 20);
  playButton.mousePressed(startGame);
//restart button
  restartButton = createButton('Restart');
  styleButton(restartButton);
  restartButton.position(width / 2 - 49, height / 2 + 40);
  restartButton.mousePressed(restartGame);
  restartButton.hide();
}

function draw() {
  if (!gameStarted) {
    titleScreen();
    return;
  }

  if (gameOver) {
    endScreen();
    return;
  }

  background(255, 182, 193); // Pink background

  //the catcher
  let catcherX = mouseX;
  let catcherY = mouseY;
  let catcherWidth = 50;
  let catcherHeight = 20;

  fill(50);
  rectMode(CENTER);
  rect(catcherX, catcherY, catcherWidth, catcherHeight);

  // balls
  for (let i = balls.length - 1; i >= 0; i--) {
    balls[i].update();
    balls[i].display();
    if (balls[i].caught(catcherX, catcherY, catcherWidth, catcherHeight)) {
      score++;
      balls.splice(i, 1);
      balls.push(new Ball());
    } else if (balls[i].offScreen()) {
      balls.splice(i, 1);
      balls.push(new Ball());
    }
  }

  //the squares
  for (let i = squares.length - 1; i >= 0; i--) {
    squares[i].update();
    squares[i].display();
    if (squares[i].caught(catcherX, catcherY, catcherWidth, catcherHeight)) {
      score--;
      squareHits++;
      hitSound.play(); // Play sound when the square is caught
      if (squareHits >= 5) {
        gameOver = true;
      }
      squares.splice(i, 1);
      squares.push(new Square());
    } else if (squares[i].offScreen()) {
      squares.splice(i, 1);
      squares.push(new Square());
    }
  }
//score
  fill(0);
  textSize(24);
  text("Score: " + score, 10, 30);
  text("Square Hits: " + squareHits, 10, 60);
}

function titleScreen() {
  background(startImage); // Set the starting page background image
  fill(255, 0, 0); // Red color for the title text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Get the Right One", width / 2, height / 2 - 40); 
}

function endScreen() {
  background(255, 0, 0); // Red background for the ending page
  fill(255, 255, 0); // Yellow color for the text at the ending page
  textSize(32);
  textAlign(CENTER, CENTER);
  text("You Lose", width / 2, height / 2 - 20); //ending message 
  text("Final Score: " + score, width / 2, height / 2 + 20); 
  //total score
  restartButton.show();
}

function startGame() {
  gameStarted = true; 
  playButton.hide(); // Hide the play button
  backgroundMusic.loop(); // Start background music

  // Create 5 balls for gameplay
  for (let i = 0; i < 5; i++) {
    balls.push(new Ball());
  }

  // Create 2 squares for gameplay
  for (let i = 0; i < 2; i++) {
    squares.push(new Square());
  }
}

// Restart
function restartGame() {
  // Reset game parameters
  score = 0; // Reset score
  squareHits = 0; // Reset square hits
  gameOver = false; // Reset game over status

  // Clear arrays containing balls and squares
  balls = [];
  squares = [];

  // Create 3 balls for gameplay
  for (let i = 0; i < 3; i++) {
    balls.push(new Ball());
  }

  // Create 1 square for gameplay
  for (let i = 0; i < 1; i++) {
    squares.push(new Square());
  }

  restartButton.hide(); // Hide the restart button
}
//styling teh button
function styleButton(button) {
  button.style('background-color', 'lightgreen');
  button.style('border', 'none');
  button.style('color', 'black');
  button.style('padding', '15px 30px');
  button.style('text-align', 'center');
  button.style('text-decoration', 'none');
  button.style('display', 'inline-block');
  button.style('font-size', '16px');
  button.style('margin', '4px 2px');
  button.style('cursor', 'pointer');
  button.style('border-radius', '12px');
}

class Ball {
  constructor() {
    //random starting position+slower speed
    this.x = random(width);
    this.y = 0;
    this.diameter = 20; //ball size
    this.speed = random(1, 3); // Slower speed range
  }

  // Update ball position
  update() {
    this.y += this.speed;
  }

  // Display ball on canvas
  display() {
    fill(277); //ball color
    ellipse(this.x, this.y, this.diameter);
  }

  // chatcher check the ball
  caught(catcherX, catcherY, catcherWidth, catcherHeight) {
    let d = dist(this.x, this.y, catcherX, catcherY);
    return d < this.diameter / 2 + catcherWidth / 2;
  }

  // Check if the ball is off-screen
  offScreen() {
    return this.y > height;
  }
}

class Square {
  constructor() {
     //random starting position+slower speed
    this.x = random(width);
    this.y = 0;
    this.size = 20;
    this.speed = random(1, 2.5); // Slower speed range
  }

  // Update square position
  update() {
    this.y += this.speed;
  }

  // Display square on canvas
  display() {
    fill(200, 0, 0); //square color
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }

   // chatcher check the square
  caught(catcherX, catcherY, catcherWidth, catcherHeight) {
    let d = dist(this.x, this.y, catcherX, catcherY);
    return d < this.size / 2 + catcherWidth / 2;
  }

  // Check if the square is off-screen
  offScreen() {
    return this.y > height;
  }
}