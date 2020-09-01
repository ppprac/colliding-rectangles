var fixedrect, movingrect;

function setup() 
{
  createCanvas(1200,800);
 fixedrect =  createSprite(600, 400, 80, 80);
 movingrect = createSprite(200,200, 80, 30);
 fixedrect.shapeColor = "green";
 movingrect.shapeColor = "green";
 fixedrect.debug = true;
 movingrect.debug = true;
}

function draw() 
{
  background(0,0,255);  
  movingrect.velocityX = World.mouseX;
  movingrect.velocityY = World.mouseY;
  drawSprites();
}