const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var world;
var engine;
var canvas;
var ball;

function preload()
{

}


function setup()
{
canvas = createCanvas(1500,800);


engine = Engine.create();
world = engine.world;


ball = new Ball(500,200,100,100);
World.add(world, ball);

ground = new Ground(400,800,5000,20);
World.add(world, ground);

rope = new Rope(ball.body, {x:900,y:200})
World.add(world, rope);

box1 = new Box(1200, 250, 50,50);
box2 = new Box(1200, 300, 50,50);
box3 = new Box(1200, 350, 50,50);
box4 = new Box(1200, 400, 50,50);
box5 = new Box(1200, 450, 50,50);
box6 = new Box(1200, 500, 50,50);
box7 = new Box(1200, 550, 50,50);
box8 = new Box(1200, 600, 50,50);
box9 = new Box(1200, 650, 50,50);
box10 = new Box(1200, 700, 50,50);

box11 = new Box(1100, 250, 50,50);
box12 = new Box(1100, 300, 50,50);
box13 = new Box(1100, 350, 50,50);
box14 = new Box(1100, 400, 50,50);
box15 = new Box(1100, 450, 50,50);
box16 = new Box(1100, 500, 50,50);
box17 = new Box(1100, 550, 50,50);
box18 = new Box(1100, 600, 50,50);
box19 = new Box(1100, 650, 50,50);
box20 = new Box(1100, 700, 50,50);

box21 = new Box(1000, 250, 50,50);
box22 = new Box(1000, 300, 50,50);
box23 = new Box(1000, 350, 50,50);
box24 = new Box(1000, 400, 50,50);
box25 = new Box(1000, 450, 50,50);
box26 = new Box(1000, 500, 50,50);
box27 = new Box(1000, 550, 50,50);
box28 = new Box(1000, 600, 50,50);
box29 = new Box(1000, 650, 50,50);
box30 = new Box(1000, 700, 50,50);


}


function draw()
{
background("aqua");

Engine.update(engine);

ball.display();
ground.display();
rope.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();

box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();

box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();


spacePressed();

drawSprites();
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body,{x : mouseX , y : mouseY});
}

function spacePressed(){
    if(keyCode === 32 && !rope.bodyA){
        rope.attach(ball.body);
    }
}

function mouseReleased(){
        rope.fly();
}