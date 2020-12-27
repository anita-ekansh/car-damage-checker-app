var wall,wallImage;
var speed, weight;
var car,carImage;
var damageBox;
var road,roadImage;

function preload(){

carImage = loadImage ("car2.png");
roadImage = loadImage ("road.png");
wallImage = loadImage ("wall.png");

}

function setup() {
  createCanvas(1243,400);
  speed = random(55,100)
  weight = random(400,1500)

  road = createSprite(700, 200);
  road.addImage(roadImage);
  road.scale = 0.40

  wall = createSprite(1250, 200, 60, height/2);
  wall.addImage(wallImage);

  car = createSprite(50, 200);
  car.velocityX = speed;
  car.addImage(carImage);

  damageBox = createSprite(700, 50, 50, 50);

}   

function draw() {
  background("lightblue");  

  if(wall.x-car .x < (car. width+wall.width)/2)
  {
  car . velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if (deformation>180)
  { 
  damageBox . shapeColor=color(255, 0,0);

  stroke ("black");
  fill ("red");
  textSize(25);
  text("You Are In Danger!",550,350);

  }
  if(deformation <180 && deformation>100)
  {
  damageBox . shapeColor=color (230, 230,0) ;

  stroke ("black");
  fill ("yellow");
  textSize(25);
  text("Drive Carefully!",550,350); 

  }
  if (deformation<100)
  {
    damageBox . shapeColor=color(0, 255,0) ;

    stroke ("black");
    fill ("green");
    textSize(25);
    text("You Are Safe!",550,350); 

  }
}
  drawSprites();
  stroke ("black");
  fill ("blue");
  textSize(20);
  text("Damage = ",570,55);

}
