const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
function preload()
{
	boy = loadImage("Pluckingmangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(300,200,20,30);
	mango1 = new Mango(300,150,10);
	mango2 = new Mango(300,200,10);
	mango3 = new Mango(300,200,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  drawSprites();
 
}



