
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;
var Chances=0;


function setup() {
	createCanvas(3000, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(160,500,20);
	mango1 = new Mango(1200,300,30);
	mango2 = new Mango(1300,200,30);
	mango3 = new Mango(1450,300,30);
	mango4 = new Mango(1325,300,30);
	mango5 = new Mango(1400,225,30);
	mango6 = new Mango(1250,250,30);
  mango7 = new Mango(1250,410,30);
  mango8 = new Mango(1400,410,30);

  tree = new Tree(1300,680);
  ground = new Ground(0,680,4000,20);
	boy = new Boy(269,600);
	chain = new Chain(stone.body,{x:160, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);

  
  background("lightblue")
  fill('black');
  stroke("yellow")
  textSize(24);
  text("PRESS [R] TO GET A SECOND CHANCE TO PLAY", 150,100);

  fill('black');
  stroke("yellow")
  textSize(24);
  text("Throw:" + Chances, 500,300);

  
 


  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);

  
  drawSprites();

  
  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});

}
function mouseReleased(){
    chain.fly();
    Chances=Chances+1;
    
}
function keyPressed(){
  if(keyCode === 82){
    Matter.Body.setPosition(stone.body,{x:200, y:500});
    chain.attach(stone.body);
      }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }
  

}
