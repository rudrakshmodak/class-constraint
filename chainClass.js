class chainClass{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.4
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain);
    }
    display(){
      line(bodyA.body.position.x, bodyA.body.position.y, bodyB.body.position.x, bodyB.body.position.y);
    }
}