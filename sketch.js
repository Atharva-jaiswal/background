var ball

function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,30,30);
  ball.scale=0.9;
 
  }

function draw() 
{
  background(220);
  if (keyIsDown(RIGHT_ARROW))
  {
    background('red');
  }
  if (keyIsDown(LEFT_ARROW))
  {
    background('yellow');
  }
  if (keyIsDown(DOWN_ARROW))
  {
    background('green');
  }
  if (keyIsDown(UP_ARROW))
  {
    background('purple');
  }
  drawSprites()
}






