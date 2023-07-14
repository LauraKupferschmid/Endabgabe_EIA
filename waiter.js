"use strict";
var iceshop;
(function (iceshop) {
    class waiter extends iceshop.human {
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
            // fliege
            iceshop.crc2.fillStyle = "Black";
            iceshop.crc2.beginPath();
            iceshop.crc2.moveTo(390, 315);
            iceshop.crc2.lineTo(390, 325);
            iceshop.crc2.lineTo(410, 315);
            iceshop.crc2.lineTo(410, 325);
            iceshop.crc2.lineTo(390, 315);
            iceshop.crc2.fill();
            iceshop.crc2.closePath;
        }
    }
    iceshop.waiter = waiter;
})(iceshop || (iceshop = {}));
//# sourceMappingURL=waiter.js.map