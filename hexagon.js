class Ball{
    constructor(){
        var options={
            isStatic=true,
            friction:1.0,
            density:1.0
        }
        this.body=Bodies.circle(50,200,20,options);
        World.add(world,this.body)
        
    }
    display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0,0,20,20)

        pop();
      }
}