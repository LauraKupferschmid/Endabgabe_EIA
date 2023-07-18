"use strict";
var iceshop;
(function (iceshop) {
    class Human {
        x;
        y;
        width;
        height;
        speed;
        canvas;
        ctx;
        keys;
        constructor(canvas) {
            this.canvas = canvas;
            this.ctx = this.canvas.getContext('2d');
            this.x = this.canvas.width / 2;
            this.y = this.canvas.height / 2;
            this.width = 50;
            this.height = 50;
            this.speed = 5;
            this.keys = {};
            window.addEventListener('keydown', (e) => this.handleKeyDown(e));
            window.addEventListener('keyup', (e) => this.handleKeyUp(e));
            this.gameLoop();
        }
        // x: number;
        // y: number;
        // width: number;
        // height: number;
        // speed: number;
        // mood: string;
        // constructor(x: number, y: number, width: number, height: number, speed: number, mood : string) {
        //   this.x = x;
        //   this.y = y;
        //   this.width = width;
        //   this.height = height;
        //   this.speed = speed;
        //   this.mood = "happy"
        //   this.mood = mood;
        // gamecanvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
        // ctx= gamecanvas.getContext('2d')!;
        // }
        // Get the canvas element and its 2D rendering context
        // draw(ctx: CanvasRenderingContext2D){};
        // move(keys: { [key: string]: boolean }){};
        // position: Vector;
        // velocity: Vector;
        // mood: string;
        // x: number;
        // y: number;
        // width: number;
        // height: number;
        // speed: number;
        // constructor(_velocity: Vector, _position: Vector, _mood: string) {
        //     this.velocity = new Vector(50, 0);
        //     this.velocity = new Vector(120, 20);
        //     this.position = new Vector(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height)
        //     this.position = new Vector(150, 20);
        //     this.position = _position;
        //     this.mood = "happy";
        //     this.mood = _mood;,_position: Vector, _size: Vector, mood: string
        // }
        draw() {
            //face
            iceshop.ctx.fillStyle = "yellow";
            iceshop.ctx.beginPath();
            iceshop.ctx.arc(400, 300, 22, 0, 2 * Math.PI);
            iceshop.ctx.fill();
            iceshop.ctx.closePath();
            //eyes
            iceshop.ctx.fillStyle = "black";
            iceshop.ctx.beginPath();
            iceshop.ctx.arc(394, 298, 3, 0, 2 * Math.PI);
            iceshop.ctx.fill();
            iceshop.ctx.closePath();
            iceshop.ctx.fillStyle = "black";
            iceshop.ctx.beginPath();
            iceshop.ctx.arc(406, 298, 3, 0, 2 * Math.PI);
            iceshop.ctx.fill();
            iceshop.ctx.closePath();
            // mouth happy
            iceshop.ctx.strokeStyle = "Black";
            iceshop.ctx.beginPath();
            iceshop.ctx.arc(400, 305, 4, 0, 1 * Math.PI);
            iceshop.ctx.stroke();
            iceshop.ctx.closePath();
        }
        move(keys) {
            if (keys['w'])
                this.y -= this.speed;
            if (keys['s'])
                this.y += this.speed;
            if (keys['a'])
                this.x -= this.speed;
            if (keys['d'])
                this.x += this.speed;
        }
        handleKeyDown(e) {
            this.keys[e.key.toLowerCase()] = true;
        }
        handleKeyUp(e) {
            this.keys[e.key.toLowerCase()] = false;
        }
        gameLoop() { }
    }
    iceshop.Human = Human;
})(iceshop || (iceshop = {}));
//# sourceMappingURL=human.js.map