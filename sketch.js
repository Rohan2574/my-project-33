var snow
var particles=[]

function preload(){
  snow = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(snow);  
  drawSprites();
  if(frameCount % 40 === 0){
    var px= Math.round(random(50,750))
    particles=new Snow (px,0,10)
    particles.push(particles)
  }
  //display the paricles 
  for (var l = 0; l < particles.length; l++) {
    particles[l].display();
  }
}