namespace iceshop {

export class Waiter extends Human {

    draw(): void {


        //face
        this.ctx.fillStyle = "yellow";
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 22, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        //eyes
        this.ctx.fillStyle = "black";
        this.ctx.beginPath();
        this.ctx.arc(this.x - 6, this.y - 2, 3, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.fillStyle = "black";
        this.ctx.beginPath();
        this.ctx.arc(this.x + 6, this.y - 2, 3, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        // mouth happy
        this.ctx.strokeStyle = "black";
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y + 5, 4, 0, 1 * Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();
        // fliege
        this.ctx.fillStyle = "Black";
        this.ctx.beginPath();
        this.ctx.moveTo(this.x - 10, this.y + 15);
        this.ctx.lineTo(this.x - 10, this.y + 25);
        this.ctx.lineTo(this.x + 10, this.y + 15);
        this.ctx.lineTo(this.x + 10, this.y + 25);
        this.ctx.lineTo(this.x - 10, this.y + 15);
        this.ctx.fill();
        this.ctx.closePath
    }

    move(): void {
        if (this.keys['w']) this.y -= this.speed;
        if (this.keys['s']) this.y += this.speed;
        if (this.keys['a']) this.x -= this.speed;
        if (this.keys['d']) this.x += this.speed;
    }

    handleKeyDown(e: KeyboardEvent): void {
        this.keys[e.key.toLowerCase()] = true;
    }

    handleKeyUp(e: KeyboardEvent): void {
        this.keys[e.key.toLowerCase()] = false;
    }

    gameLoop(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.move();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
}
}