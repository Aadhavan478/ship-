var ship,shipImg1,edges;
var sea,seaImg;

function preload()
{
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);


  //adding sea
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImg); 
  sea.velocityX = -2;
  sea.scale = 0.3;

  //creating ship 
  ship = createSprite(150,150,20,50);
  ship.addAnimation("moving", shipImg1);
  edge = createEdgeSprites();

  //scaling the ship
  ship.scale = 0.2;
  ship.x = 50;
}

function draw() {
  background(seaImg);
  drawSprites();

  if (sea.x < 0)
  {
   sea.x = sea.width/8;
  }
}