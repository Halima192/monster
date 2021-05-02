const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const body=Matter.body;
const Constraint = Matter.Constraint;
var engine,world; 

var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14;
var ground;
var monster,superhero;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(300, 800);

engine=Engine.create();
world=engine.world;

//create bodies here
ground=new Ground(200,350,30,40)

superhero=new Hero(400,3,100,100)

block1=new Block(280,350,30,40)
block2=new Block(310,350,30,40)
block3=new Block(340,350,30,40)
block4=new Block(370,350,30,40)
block5=new Block(400,350,30,40)
block6=new Block(430,350,30,40)
block7=new Block(460,350,30,40)
block8=new Block(280,350,30,40)
block9=new Block(280,350,30,40)
block10=new Block(400,350,30,40)
block11=new Block(430,350,30,40)
block12=new Block(460,350,30,40)
block13=new Block(280,350,30,40)
block14=new Block(280,350,30,40)

monster=new Monster(380,200,100,100)

Engine.run(engine);
}

function draw() {
  background(0);
  rectMode(CENTER)

  superhero.display();
  ground.display();
  stroke(15)
  fill("red")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();


}

function mouseDragged(){
  Matter.body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  attach.fly();
}