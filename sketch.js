const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload(){
 
dog1= loadImage("Images/Dog.png")
dog2=loadImage("happy dog.png")

}

function setup() {
  createCanvas(1000,400);
  
  engine = Engine.create();
  world = engine.world;

  dog.createSprite=(200,200,200,200)
  dog.addImage(dog1)

}

function draw() {
  background(46,139,87);
  Engine.update(engine);
  dog.display()
 
  
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
