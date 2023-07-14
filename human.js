"use strict";
var iceshop;
(function (iceshop) {
    class human {
        position;
        velocity;
        mood;
        constructor(_velocity, _position, _mood) {
            this.velocity = new iceshop.Vector(50, 0);
            this.velocity.randomize(120, 20);
            this.velocity = _velocity;
            this.position = new iceshop.Vector(150, 20);
            this.position = _position;
            this.mood = "happy";
            this.mood = _mood;
        }
        draw(_position, _size) {
            //face
            iceshop.crc2.fillStyle = "yellow";
            iceshop.crc2.beginPath();
            iceshop.crc2.arc(400, 300, 22, 0, 2 * Math.PI);
            iceshop.crc2.fill();
            iceshop.crc2.closePath();
            //eyes
            iceshop.crc2.fillStyle = "black";
            iceshop.crc2.beginPath();
            iceshop.crc2.arc(394, 298, 3, 0, 2 * Math.PI);
            iceshop.crc2.fill();
            iceshop.crc2.closePath();
            iceshop.crc2.fillStyle = "black";
            iceshop.crc2.beginPath();
            iceshop.crc2.arc(406, 298, 3, 0, 2 * Math.PI);
            iceshop.crc2.fill();
            iceshop.crc2.closePath();
            // mouth happy
            iceshop.crc2.strokeStyle = "Black";
            iceshop.crc2.beginPath();
            iceshop.crc2.arc(400, 305, 4, 0, 1 * Math.PI);
            iceshop.crc2.stroke();
            iceshop.crc2.closePath();
        }
        move() {
        }
    }
    iceshop.human = human;
})(iceshop || (iceshop = {}));
//# sourceMappingURL=human.js.map