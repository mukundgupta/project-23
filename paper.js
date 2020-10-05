class Paper{
    constructor(x, y, diameter) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.diameter = diameter;
        this.body = Bodies.circle(this.x, this.y, this.diameter/2, options);
        
        World.add( world, this.body);
      }
      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.diameter,this.diameter);
        pop();
      }
}