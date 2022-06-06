const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var bola;

var p1,p2,p3,p4;

var botao;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 
  var options={
    restitution: 0.95,
    frictionAir: 0.01
  }
 
  bola = Bodies.circle(50,50,20,options);
  World.add(world,bola);

  p1 = new Ground(200,390,400,20);
  p2 = new Ground(390,200,20,400);
  p3 = new Ground(10,200,20,400);
  p4 = new Ground(200,10,400,20);

  botao = createImg("up.png");
  botao.position(320,40);
  botao.size(50,50);
  botao.mouseClicked(forca);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(bola.position.x, bola.position.y,20)
  p1.display();
  p2.display();
  p3.display();
  p4.display();





}

function forca(){
  Body.applyForce(bola,{x: 0, y:0},{x:0, y:-0.05});
}

