"use strict";
var iceshop;
(function (iceshop) {
    class customer extends iceshop.human {
        // position: Vector;
        // velocity: Vector;
        // mood: string;
        // constructor(_velocity: Vector, _position: Vector, _mood: string) {
        //         this.velocity = new Vector(50, 0);
        //         this.velocity.randomize(120, 20);
        //         this.velocity = _velocity;
        //         this.position = new Vector(150, 20);
        //         this.position = _position;
        //         this.mood = "happy";
        //         this.mood = _mood;
        //     }
        draw(_position, _size) {
            if (this.mood = "happy") {
                // //Schirm
                // crc2.beginPath();
                // crc2.fillStyle = this.changeColor();
                // crc2.fillRect(_position.x, _position.y, 10, 16);
                // crc2.fillStyle = this.changeColor();
                // crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                // crc2.closePath();
                // crc2.beginPath();
                // crc2.moveTo(_position.x, _position.y);
                // crc2.lineTo(_position.x - 20, _position.y - 20);
                // crc2.lineTo(_position.x + 30, _position.y - 30);
                // crc2.stroke();
                // crc2.fillStyle = this.changeColor();
                // crc2.fill();
                // crc2.closePath();
            }
            if (this.mood = "annoyed") {
                //Kein Schirm
                // crc2.beginPath();
                // crc2.fillStyle = this.changeColor();
                // crc2.fillRect(_position.x, _position.y, 10, 16);
                // crc2.fillStyle = this.changeColor();
                // crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                // crc2.closePath();
            }
            if (this.mood = "unhappy") {
                //KeinSchirm
                // crc2.beginPath();
                // crc2.fillStyle = this.changeColor();
                // crc2.fillRect(_position.x, _position.y, 10, 16);
                // crc2.fillStyle = this.changeColor();
                // crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                // crc2.closePath();
            }
        }
        ;
    }
})(iceshop || (iceshop = {}));
//# sourceMappingURL=customer.js.map