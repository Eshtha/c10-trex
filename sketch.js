
var trex ,trex_running;
var edges ,ground,groundImage
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,160,20,50)
  trex.addAnimation("running", trex_running);
  //create a trex sprite
  trex.scale=0.5
  edges= createEdgeSprites()
  ground= createSprite(200,180,400,20)
 ground.addImage("ground",groundImage)
 ground.x=ground.width/2
}

function draw(){
  background(220)
  ground.velocityX = -2
  if (ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")) { 
    trex.velocityY = -10;
   }
   console.log (trex.y)
   trex.velocityY = trex.velocityY + 0.8
   trex.collide (ground)
  drawSprites()

}
