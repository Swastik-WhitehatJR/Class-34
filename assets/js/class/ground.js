class Ground{
    constructor(x, y, width, height) {

        var ground_options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x, y, width, height, ground_options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        Matter.Body.setStatic(this.body, true);

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("brown");
        rect(0, 0, this.width, this.height);
        pop();
    }
}