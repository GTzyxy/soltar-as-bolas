
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rectangle1, rectangle2, rectangle3;

var angle = 60
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var rectangle_option = { restitution:0.4, friction:0.02 }
    rectangle1 = Bodies.rectangle(250, 200, 150, 20, rectangle_option);
	rectangle2 = Bodies.rectangle(250, 200, 150, 20, rectangle_option);
	rectangle3 = Bodies.rectangle(250, 200, 150, 20, rectangle_option);

     World.add(world,rectangle1);
     World.add(world,rectangle2);
	 World.add(world,rectangle3);

	Engine.run(engine);
  
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
 
  Matter.Body.rotate(rectangle1,angle);
  push();
  translate(rectangle1.position.x, rectangle1.position.y);
  rotate(angle);
  pop();
  
  angle +=0.2;
  rect(rectangle1.position.x, rectangle1.position.y, 150, 20);
  rect(rectangle2.position.x, rectangle2.position.y, 200, 20);
  rect(rectangle3.position.x, rectangle3.position.y, 250, 20);

  drawSprites();
 
}



