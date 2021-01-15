
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var rope1;

function setup() {
	createCanvas(1530, 680);


	engine = Engine.create();
	world = engine.world;


        stroke("red")
        strokeWeight(3)
        fill("cyan")
	ground=Bodies.rectangle(width/2,150,width,10,{isStatic:true})
	World.add(world,ground)

	roof = new Roof(720,100,600,50,0,{isStatic:true})
	bob1 = new bob(500,600,40)
	bob2 = new bob(600,600,40)
	bob3 = new bob(700,600,40)
	bob4 = new bob(800,600,40)
	bob5 = new bob(900,600,40)
	rope1=new Ropes (bob1.body, roof.body,-215, 0)
	rope2=new Ropes (bob2.body, roof.body,-115, 0)
	rope3=new Ropes (bob3.body, roof.body,-15, 0)
	rope4=new Ropes (bob4.body, roof.body,90, 0)
	rope5=new Ropes (bob5.body, roof.body,190, 0)
	//rope1=new Ropes (bob1.body, roof.body,-215, 0)
	//rope1 = new Ropes(roof,bob1,0,0)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  bob1.display();
  bob2.display();
  bob4.display();
  
  bob5.display();
  bob3.display();
  keyPressed()
  drawSprites();
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-100,y:5});
	 }
   }
  



