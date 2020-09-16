class BLock{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visisbility=255;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
       if(this.body<3){
      push();
        translate(this.body.position.x, this.body.position.y);  
        image(this.image, 0, 0, this.width, this.height);
       }else{
         tint(255,this.visisbility);
         this.visisbility=this.visisbility-5;
         pop();
       }
       

       
        
      }
}