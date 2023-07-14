"use strict";
var iceshop;
(function (iceshop) {
    class customer extends iceshop.human {
        draw(_position, _size) {
            if (this.mood = "happy") {
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
            if (this.mood = "annoyed") {
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
                // mouth anooyed
                iceshop.crc2.strokeStyle = "Black";
                iceshop.crc2.beginPath();
                iceshop.crc2.arc(395, 308, 4, 1.3 * Math.PI, 2 * Math.PI);
                iceshop.crc2.stroke();
                iceshop.crc2.closePath();
                iceshop.crc2.rotate(90);
                iceshop.crc2.save();
            }
            if (this.mood = "unhappy") {
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
                //mouth unhappy
                iceshop.crc2.strokeStyle = "Black";
                iceshop.crc2.beginPath();
                iceshop.crc2.arc(400, 308, 4, 1 * Math.PI, 2 * Math.PI);
                iceshop.crc2.stroke();
                iceshop.crc2.closePath();
                iceshop.crc2.rotate(90);
                iceshop.crc2.save();
            }
        }
        ;
    }
    iceshop.customer = customer;
})(iceshop || (iceshop = {}));
//# sourceMappingURL=customer.js.map