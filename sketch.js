var PLAY = 1;
var gameState = PLAY;
var bow , arrow,  background, arrowGroup;
var bowImage, arrowImage, b1, b2, b3 ,b4, backgroundImage, b1Group, b2Group, b3Group, b4Group;
var red;
var edges;
var score;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  b1 = loadImage("red_balloon0.png");
  b2 = loadImage("blue_balloon0.png");
  b3 = loadImage("green_balloon0.png");
  b4 = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);

  score = 0
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  b1Group = new Group()
  b2Group = new Group()
  b3Group = new Group()
  b4Group = new Group()
  arrowGroup = new Group()

 
 

 
  
}

function draw() {
 background(0);


if (gameState === PLAY) {
  
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }

  bow.y = World.mouseY

  if (keyDown("space")) {
    spawnArrow();
  }

  if (b1Group.isTouching(arrowGroup)) {
    b1Group.destroyEach()
    arrowGroup.destroyEach()
    score = score+ 1
  }
  if (b2Group.isTouching(arrowGroup)) {
    b2Group.destroyEach()
    arrowGroup.destroyEach()
    score = score+ 1
  }
  if (b3Group.isTouching(arrowGroup)) {
    b3Group.destroyEach()
    arrowGroup.destroyEach()
    score = score+ 1
  }
  if (b4Group.isTouching(arrowGroup)) {
    b4Group.destroyEach()
    arrowGroup.destroyEach()
    score = score+ 1
  }

  spawnRedballoon()
  spawnBlueballoon()
  spawnGreenballoon()
  spawnPinkballoon()





}




 
  // moving ground
 
   
    
  
  //moving bow
 
  
   // release arrow when space key is pressed
 

 



  edges = createEdgeSprites()

 

 
 

  
  //creating continous balloons

  drawSprites();
stroke("green")
fill("green")
  textSize(20);
  text("Score: " + score,300,50);
}


// Creating  arrows for bow
 function spawnArrow() {
 var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 50;
  arrow.scale = 0.3;

  arrowGroup.add(arrow)
}


function spawnRedballoon() {


  if (frameCount%50 === 0) {
    var red = createSprite(0,Math.round(random(50,350)), 10, 10);
    red.addImage(b1);
    red.velocityX = 3;
    red.lifetime = 150;
    red.scale = 0.1;

   b1Group.add(red)
  

   
  }

 

}



function spawnBlueballoon() {
  //write code for spwaning blue balloons
  if (frameCount%100 === 0) {
    var blue = createSprite(0,Math.round(random(50,350)), 10, 10);
    blue.addImage(b2);
    blue.velocityX = 3;
    blue.lifetime = 150;
    blue.scale = 0.1;

    b2Group.add(blue)
  
  }





}

function spawnGreenballoon() {
  //write code for spwaning green balloons
  if (frameCount%70 === 0) {
    var green = createSprite(0,Math.round(random(20,350)), 10, 10);
    green.addImage(b3);
    green.velocityX = 3;
    green.lifetime = 150;
    green.scale = 0.1;

    b3Group.add(green)
  
  }




}

function spawnPinkballoon() {
  //write code for spwaning pink balloons
  if (frameCount%150=== 0) {
    var pink = createSprite(0,Math.round(random(20,350)), 10, 10);
    pink.addImage(b4);
    pink.velocityX = 3;
    pink.lifetime = 150;
    pink.scale = 1.5;

    b4Group.add(pink)
  
  }







}
