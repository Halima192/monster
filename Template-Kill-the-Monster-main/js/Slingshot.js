class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
launch(bodyA){
    this.sling.bodyA = bodyA;
}
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){

    }
    
}           
           
               
                
               
            
           
            
            
   