"use strict";
var iceshop;
(function (iceshop) {
    class waiter extends iceshop.human {
        // position: Vector;
        // velocity: Vector;
        // mood: string;
        // constructor(_velocity: Vector, _position: Vector, _mood: string) {
        //     this.velocity = new Vector(50, 0);
        //     this.velocity.randomize(120, 20);
        //     this.velocity = _velocity;
        //     this.position = new Vector(150, 20);
        //     this.position = _position;
        //     this.mood = "happy";
        //     this.mood = _mood;
        // }
        draw(_position, _size) {
            //face
            iceshop.crc2.fillStyle = "yellow";
            iceshop.crc2.beginPath();
            iceshop.crc2.arc(400, 300, 20, 0, 2 * Math.PI);
            iceshop.crc2.fill();
            iceshop.crc2.closePath();
            //eyes
            iceshop.crc2.fillStyle = "black";
            iceshop.crc2.beginPath();
            iceshop.crc2.arc(395, 295, 2, 0, 2 * Math.PI);
            iceshop.crc2.fill();
            iceshop.crc2.closePath();
            iceshop.crc2.fillStyle = "black";
            iceshop.crc2.beginPath();
            iceshop.crc2.arc(405, 295, 2, 0, 2 * Math.PI);
            iceshop.crc2.fill();
            iceshop.crc2.closePath();
            //mouth
            iceshop.crc2.strokeStyle;
        }
    }
})(iceshop || (iceshop = {}));
//# sourceMappingURL=waiter.js.map