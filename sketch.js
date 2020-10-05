
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(150,680,50);
	paper.shapeColor = "white"

	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  paper.display();
  Engine.update(engine);
  drawSprites();
 
}



