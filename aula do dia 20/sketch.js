

// nameespace

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body


// variaveis

var motor, mundo;

var bola, chao;

function setup() {
  
  createCanvas(400,400)
  
  // inicializar o motor da fisica
  motor = Engine.create();

  // inicializa o mundo
  mundo = motor.world;

  //inicializa a bola 
  var bola_option = {
    restitution:0.95,
    frictionAir:0.01
  };

bola = Bodies.circle(100,30,20,bola_option);
World.add(mundo,bola);      //add a bola no mundo

// inicializar o chao
  var chao_options = {
    isStatic:true
  };

  chao = Bodies. rectangle(200,390,402,10,chao_options);
  World.add(mundo, chao);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  Engine.update(motor);
  background("gray"); 
  fill("red")
  ellipse(bola.position.x, bola.position.y,20);
  rect(chao.position.x, chao.position.y, 402, 20)

}

