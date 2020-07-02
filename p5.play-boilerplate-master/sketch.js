 var  fixedrect,movingrect;
 
 
 
 function setup() {
  createCanvas(800,400);
   fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor ="purple";
  movingrect = createSprite(100,100,40,40);
  movingrect.shapeColor="purple";
}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  drawSprites();
}