
  function setup() {
    // put setup code here
    createCanvas(1500,1000);
    background('#000000');
  }
  function draw() {
   let title = 'Tic-Tac-Toe';
   let instruction = 'Click to Draw';
        textSize(32);
        text(title, 650, 60)
        fill(0, 102, 153);
        text(instruction, 640, 100)
        fill(0, 102, 153);
        line(625, 150, 625, 700);
        line(850, 150, 850, 700);
        line(400, 300, 1100, 300);
        line(400, 500, 1100, 500);       
        stroke(255);
        if (mouseIsPressed == true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}
