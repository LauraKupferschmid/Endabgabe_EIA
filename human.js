"use strict";
var iceshop;
(function (iceshop) {
    class human {
        x;
        y;
        speed;
        canvas;
        ctx;
        keys;
        constructor(gamecanvas) {
            this.canvas = gamecanvas;
            this.ctx = this.canvas.getContext('2d');
            this.x = this.canvas.width / 2;
            this.y = this.canvas.height / 2;
            this.speed = 5;
            this.keys = {};
            window.addEventListener('keydown', (e) => this.handleKeyDown(e));
            window.addEventListener('keyup', (e) => this.handleKeyUp(e));
            this.gameLoop();
        }
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
        ;
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
        ;
        handleKeyDown(e) {
            this.keys[e.key.toLowerCase()] = true;
        }
        ;
        handleKeyUp(e) {
            this.keys[e.key.toLowerCase()] = false;
        }
        ;
        gameLoop() {
        }
        ;
    }
    iceshop.human = human;
})(iceshop || (iceshop = {}));
//# sourceMappingURL=human.js.map