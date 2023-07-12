"use strict";
var iceshop;
(function (iceshop) {
    function drawBackground() {
        console.log("Background");
        iceshop.crc2.fillStyle = "lightblue";
        iceshop.crc2.fillRect(0, 0, 900, 400);
        iceshop.crc2.fillStyle = "grey";
        iceshop.crc2.fillRect(0, 390, 900, 60);
        iceshop.crc2.fillStyle = "black";
        iceshop.crc2.fillRect(0, 380, 50, 10);
        iceshop.crc2.fillStyle = "black";
        iceshop.crc2.fillRect(200, 380, 700, 10);
        iceshop.crc2.beginPath();
    }
    iceshop.drawBackground = drawBackground;
})(iceshop || (iceshop = {}));
//# sourceMappingURL=background.js.map