var wall , bullet 
var speed , wieght , thickness

function setup() {
  createCanvas(1600,400);
  speed=random(30,52)
  weight=random(223,321)
  thickness=random(22,83)
  
  wall=createSprite(1200, 200,thickness, height/2);
  wall.shapeColor=color(80,80,80)
  bullet=createSprite(50,200,60,10);
  bullet.velocityX=speed;

  
}

function draw() {
  background(0);  

    if (wall.x-bullet.x< (bullet.width+wall.width)/2){

      bullet.velocityX=0;
      var damage = 0.5*weight*speed*speed/thickness*thickness*thickness
      if(damage>10){
        bullet.shapeColor="red";
      }
      console.log(damage)
     

      if(damage<=10){
        bullet.shapeColor="green";
      }
    }

  drawSprites();
}

function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x
if(bulletRightEdge=>wallLeftEdge){
  return true
}
return false
}
