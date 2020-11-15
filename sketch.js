var bullet, wall;
var Damage
var speed, weight, thickness;
function setup() {
  createCanvas(2500,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22,83)
  bullet = createSprite(50, 200, 100, 90);
  //bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall = createSprite(1150, 200, thickness, height/2);
  wall.shapeColor=(80,80,80)
 
  

  //console.log(bullet.velocityX)
  //console.log(weight)
  //console.log(thickness)

  //wall.debug=true;
  bullet.debug=true;
  //bullet.setCollider("rectangle", 0, 0, 5000, 50)
}

function draw() {
  background("black");  
  bullet.depth=wall.depth;
  bullet.depth=bullet.depth+1;
  if(isTouching(bullet,wall)){
    //bullet.velocityX=0;
    if(Damage>10){
      wall.shapeColor=color(255,0,0);
    }
    else if(Damage<10){
      wall.shapeColor=color(23,206,17);
    }
  }
  Damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  console.log(Damage)
  drawSprites();
}