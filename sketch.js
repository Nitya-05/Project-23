var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground, wall1, wall2, wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1 = createSprite(400,650,200,20);
	wall1.shapeColor = "red";

	wall2 = createSprite(300,610,20,100);
	wall2.shapeColor = "red";

	wall3 = createSprite(500,610,20,100);
	wall3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);

	var wall1_options = {
		isStatic : true
	  }
	  wall1 = Bodies.rectangle(150,350,200,20,wall1_options);
	  World.add(world,wall1);

	  var wall2_options = {
		isStatic : true
	  }
	  wall2 = Bodies.rectangle(200,350,20,100,wall2_options);
	  World.add(world,wall2);

	  var wall3_options = {
		isStatic : true
	  }
	  wall3 = Bodies.rectangle(250,350,20,100,wall3_options);
	  World.add(world,wall3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}



