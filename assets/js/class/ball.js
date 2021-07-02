class Ball {
    constructor(x, y, width, height) {

        var ball_options = {
            restitution: 0.5
        }

        this.body = Bodies.rectangle(x, y, width, height, ball_options);
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
        ellipseMode(CENTER);
        fill("orange");
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}