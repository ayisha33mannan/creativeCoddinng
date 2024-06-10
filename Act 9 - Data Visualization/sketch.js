var table;

function preload() {
  table = loadTable("data.csv", "csv", "header");
}

function setup() {
  createCanvas(475, 325);
  background(255);
  noStroke();
}

function draw() {
  background(0); // Clear the canvas on every frame
  push();
  textSize(18);
  textStyle(BOLD);
  fill(255);
  text("Screen Time For this Week", 50, 50);
  textSize(14);
  textStyle(NORMAL);
  translate(0, 275);

  // Get the first row (excluding header)
  var data = table.getRow(0).arr;

  for (var i = 0; i < table.getColumnCount(); i++) {
    var screenTimeHours = parseInt(data[i]); // Convert screen time to integer
    var rectHeight = map(screenTimeHours, 2, 8, 25, 175); // Adjust map range to match screen time hours
    push(); // Add push() here to isolate transformations
    translate(i * 45 + 70, 0); // Adjust translate to properly space out the bars
    var lerpAm = map(screenTimeHours, 2, 8, 0, 1);
    var lerpCol = lerpColor(color(64, 126, 214), color(237, 40, 59), lerpAm);
    fill(lerpCol);
    textAlign(CENTER);
    rect(0, 0, 40, -rectHeight);
    text(screenTimeHours + "hrs", 20, -rectHeight - 10); // Display hours with 'hrs'
    fill(0);
    text(table.columns[i], 20, 20); // Display day names from header row
    pop(); // Add pop() here to reset transformations
  }
  pop();
}
