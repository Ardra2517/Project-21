var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,400);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(1000,200,60,height/2);
  wall.shapeColor="brown";
  speed=random(55,90);
  weight=random(900,1500);
}

function draw() {
  background(0);  

  if (wall.x-car.x<(car.width+wall.width)/2){
   car.velocityX=0
   var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
   car.shapeColour="green";
  }
  if(deformation<180 && deformation>100){
    car.shapeColour="yellow";
   }
   if(deformation<100){
    car.shapeColour="red";
   }
  }
  drawSprites();
}