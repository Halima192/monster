class Hero{
    constructor(x,y,width ,height){
var options = {
    density:1.2,
restitution:0,
friction:1,
isStatic:false
}

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height

World.add(world,this.body);
//add image
 }
display(){
    var pos=this.body.position;
    var pos=this.body.position;
    push();
    // translate(pos.x,pos.y);
   translate(this.body.position.x,this.body.position.y)
   imageMode(CENTER);
   image(this.image,0,0,this.width,this.height)
      pop();
      }
}