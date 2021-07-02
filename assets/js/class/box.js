class Box{
    constructor(x, y, width, height) {

        var box_options = {
            friction : 0.5,
            density : 1
        }

        this.body = Bodies.rectangle(x, y, width, height, box_options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        stroke("blue");
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
    }
}