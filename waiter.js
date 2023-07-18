"use strict";
var iceshop;
(function (iceshop) {
    //     export class waiter extends human {
    //         draw(_position: Vector, _size: Vector) {
    //             //face
    //             crc2.fillStyle = "yellow";
    //             crc2.beginPath();
    //             crc2.arc(400, 300, 22, 0, 2 * Math.PI);
    //             crc2.fill();
    //             crc2.closePath();
    //             //eyes
    //             crc2.fillStyle = "black";
    //             crc2.beginPath();
    //             crc2.arc(394, 298, 3, 0, 2 * Math.PI);
    //             crc2.fill();
    //             crc2.closePath();
    //             crc2.fillStyle = "black";
    //             crc2.beginPath();
    //             crc2.arc(406, 298, 3, 0, 2 * Math.PI);
    //             crc2.fill();
    //             crc2.closePath();
    //             // mouth happy
    //             crc2.strokeStyle = "Black";
    //             crc2.beginPath();
    //             crc2.arc(400, 305, 4, 0, 1 * Math.PI);
    //             crc2.stroke();
    //             crc2.closePath();
    //             // fliege
    //             crc2.fillStyle = "Black";
    //             crc2.beginPath();
    //             crc2.moveTo(390,315);
    //             crc2.lineTo(390,325);
    //             crc2.lineTo(410,315);
    //             crc2.lineTo(410,325);
    //             crc2.lineTo(390,315);
    //             crc2.fill();
    //             crc2.closePath
    //         }
    //     }
    // }
    class waiter extends iceshop.human {
        draw() {
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
            this.ctx.closePath;
        }
        updateCharacterPosition() {
            if (this.keys['w'])
                this.y -= this.speed;
            if (this.keys['s'])
                this.y += this.speed;
            if (this.keys['a'])
                this.x -= this.speed;
            if (this.keys['d'])
                this.x += this.speed;
        }
        handleKeyDown(e) {
            this.keys[e.key.toLowerCase()] = true;
        }
        handleKeyUp(e) {
            this.keys[e.key.toLowerCase()] = false;
        }
        gameLoop() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.updateCharacterPosition();
            this.draw();
            requestAnimationFrame(() => this.gameLoop());
        }
    }
    iceshop.waiter = waiter;
})(iceshop || (iceshop = {}));
//# sourceMappingURL=waiter.js.map