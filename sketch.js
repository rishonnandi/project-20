var car, wall;
var speed, weight;


function setup() {
createCanvas(1600,400);
speed=random(55,90);
weight=random(400,1500);
car = createSprite(50, 300, 100, 50);
wall = createSprite(1500,300,60,200);
wall.shapeColor=color(80,80,80);
car.shapeColor=color(300,300,300)
car.velocityX=speed;

}
function draw() {

 background(0,0,0) ; 
 


if(wall.x-car.x<(car.width+wall.width)/2)
{
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180)
    {
        car.shapeColor="Red";
    }
    if(deformation<180  && deformation>100)
    {
        car.shapeColor="Yellow";
    }
    if(deformation<100)
    {
        car.shapeColor="Green";
    }
}


 drawSprites()

























}