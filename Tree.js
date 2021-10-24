class Tree {
    constructor(x, y, width, height) {
        var options={
            isStatic: true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,width,height);
        width = this.width;
        height = this.height;
        this.image = loadImage("Pluckingmangoes/tree.png");
        World.add(world, this.body);
    }
    

display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}