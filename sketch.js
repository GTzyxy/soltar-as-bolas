
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rectangle1, rectangle2, rectangle3;

//criar variaveis de angulos diferentes, com diferentes valores, ou com os mesmo valores de angulo
var angle = 60;
var angle1 = 60;
var angle2 = 60;
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//faltou definir o corpo como estatico
	var rectangle_option = { isStatic: true,
				restitution:0.4, friction:0.02 }
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
 
  
  push();
  translate(rectangle1.position.x, rectangle1.position.y);
  rotate(angle);
  rect(0,0, 150, 20);
  pop();
  angle +=0.2;
	
//com angulos diferentes é possível criar outras configurações de reatngulos entre as funções push() e pop()
  push();
  translate(rectangle2.position.x, rectangle2.position.y);
  rotate(angle2);
  rect(0,0, 150, 20);
  pop();
  angle +=0.5;
	
 
  rect(rectangle2.position.x, rectangle2.position.y, 200, 20);
  rect(rectangle3.position.x, rectangle3.position.y, 250, 20);

  drawSprites();
 
}



