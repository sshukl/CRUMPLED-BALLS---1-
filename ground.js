class Ground {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true,
        'restitution':0,
        'friction':0,
        'density':1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
  
      World.add(world, this.body);
      }
    display(){
      rectMode(CENTER);
  
      fill(255);
  
      rect(this.body.position.x, this.body.position.y, this.width, this. height);
      }
    }; 
   
 
  class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
  
      World.add(world, this.body);
      }
    display(){
      ellipseMode(RADIUS);
  
      fill("yellow");
  
      circle(this.body.position.x, this.body.position.y, this.radius);
    }
    }; 