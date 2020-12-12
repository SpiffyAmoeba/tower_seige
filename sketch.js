const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
    createCanvas(900,900)

engine = Engine.create();
    world = engine.world;
    hex=new box(10,100,10,10)
box2=new box(350,325,30,40)
box3=new box(260,235,30,40)
box4=new box(390,325,30,40)
box5=new box(420,235,30,40)
box6=new box(450,235,30,40)
box7=new box(360,195,30,40)
box8=new box(390,195,30,40)
box9=new box(420,195,30,40)
box10=new box(390,155,30,40)
slingshot = new SlingShot(hex.body,{x:200, y:50});


}
function preload(){


}
function draw(){
background("white")
hex.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()

}