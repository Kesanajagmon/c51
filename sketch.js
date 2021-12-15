var car,c1img,c2img,c2,c3,c3img,c4,c4img;
var track,trimg,tr2,tr2img;
var c1;
 var cars = {};
function preload(){
  c1img = loadImage("car1.png");
  c2img = loadImage("car2.png");
  c3img = loadImage("car3.png");
  c4img = loadImage("car4.png");
  trimg = loadImage("edit.jpeg");
  tr2img = loadImage("edit2.jpeg");
}
function setup(){
  createCanvas(1000,600);
  track = createSprite(500,100);
  track.addImage(tr2img);

  tr2 = createSprite(-85,400);
  tr2.addImage(trimg);
  
  c1 = createSprite(500,540);
  c1.addImage(c1img);
}
function draw(){
  background("pink");
  if(frameCount%100===1)
  {
    c2 = createSprite(100,300);
    c2.addImage(c2img);
  }
  if(keyDown(LEFT_ARROW)){
    c1.velocityX = 5
  }
  console.log(c1.y);
  drawSprites();
}