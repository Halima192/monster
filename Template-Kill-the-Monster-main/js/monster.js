class Monster{
    constructor(x,y,width ,height){
var options = {
restitution:0.5,
friction:1.0,
isStatic:true
}

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height

World.add(world,this.body);
//add image
 }
display(){
push();
    // translate(pos.x,pos.y);
   translate(this.body.position.x,this.body.position.y)
   imageMode(CENTER);
   image(this.image,0,0,this.width,this.height)
      pop();
      }
}