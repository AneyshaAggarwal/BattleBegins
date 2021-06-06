var battlefield;
var troopsI;
var troop;
var gun;
var bullet;
var selectBall;
var troopsD= 0;
var gameState= "play";

function preload()
{
 pgImage= loadImage("bg.jpeg");
 troopI= loadImage("red_balloon0.png");
 gunImage= loadImage("bow0.png");
 bulletImage= loadImage("arrow0.png");
}

function setup() 
{
 createCanvas(500, 500);
 edges= createEdgeSprites();
 troopsI=0;
 battlefield = createSprite(250, 250, 500, 500);
 gun = createSprite(470, 250, 20, 50);
  
 battlefield.addImage(pgImage);
 gun.addImage(gunImage);
  
 battlefield.scale= 4.3;
 gun.scale= 1.5;
  
 battlefield.velocityX= -3
  
 troopgroup= new Group();
 bulletGroup= new Group();
}

function draw() 
{
  if(gameState=== "play")
  {

    background("blue")
    gun.y = World.mouseY
  
    if (battlefield.x < 0)
    {
      //battlefield.x= 250
      battlefield.x= battlefield.width/2;
    }
      
    if(keyDown("space"))
    {
      Createbullet();
    }
    
    if (bulletGroup.isTouching(troopgroup))
    {
      bulletGroup.destroyEach();
      troopgroup.destroyEach();
    }

    spawntroop();

    if(troopgroup.isTouching(edges[1]))
    {
      troopsI= troopsI+ 1/39;
    }

    if(troopsI===1.99)
    {
      gameState= "end";
    }

  }
  
  if(gameState=== "end")
  {
    fill(black);
    text("Congratulations!", 200, 240)
    text("You won the War!", 150, 260)
    battlefield.velocityX= 0;
  }
    
  drawSprites();
  
  text("#Troops Invaded: " + troopsI, 300, 20, textSize(20), fill("black") );
}

function Createbullet()
{
 var bullet= createSprite(410, 250, 90, 10);
 bullet.addImage(bulletImage);
 bullet.scale= 0.5;
 bullet.y = gun.y;
 bullet.velocityX= -8;
 bullet.lifetime = 220;
 bulletGroup.add(bullet);
}

function spawntroop()
{
  if(frameCount%80===0)
  {
    var troop = createSprite(0, 250, 20, 20);
    troop.addImage(troopI);
    troop.scale= 0.1;
    troop.velocityX= 3;
    troop.y= Math.round(random(40,470));
    troop.lifetime = 200;
    troopgroup.add(troop)
  }
}

