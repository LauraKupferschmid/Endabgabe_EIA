"use strict";
var iceshop;
(function (iceshop) {
    function drawBackground() {
        console.log("Background");
        // boden
        iceshop.crc2.fillStyle = "lightblue";
        iceshop.crc2.fillRect(0, 0, 900, 4890);
        // gehweg
        iceshop.crc2.fillStyle = "grey";
        iceshop.crc2.fillRect(0, 500, 900, 60);
        // wand
        iceshop.crc2.fillStyle = "black";
        iceshop.crc2.fillRect(0, 490, 50, 10);
        iceshop.crc2.fillStyle = "black";
        iceshop.crc2.fillRect(200, 490, 700, 10);
        // Theke
        iceshop.crc2.fillStyle = "grey";
        iceshop.crc2.fillRect(250, 50, 50, 170);
        iceshop.crc2.fillStyle = "grey";
        iceshop.crc2.fillRect(0, 220, 300, 50);
    }
    iceshop.drawBackground = drawBackground;
    function drawTable() {
        console.log("Tisch");
        // Tisch 1
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(480, 105, 60, 60);
        // Tisch 1 Stuhl 1
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(490, 55, 40, 40);
        // Tisch 1 Stuhl 2
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(490, 175, 40, 40);
        // Tisch 1 Stuhl 3
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(430, 115, 40, 40);
        // Tisch 1 Stuhl 4
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(550, 115, 40, 40);
        // Tisch 2
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(480, 325, 60, 60);
        // Tisch 2 Stuhl 1
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(490, 275, 40, 40);
        // Tisch 2 Stuhl 2
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(490, 395, 40, 40);
        // Tisch 2 Stuhl 3
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(430, 335, 40, 40);
        // Tisch 2 Stuhl 4
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(550, 335, 40, 40);
        // Tisch 3
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(730, 325, 60, 60);
        // Tisch 3 Stuhl 1
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(740, 275, 40, 40);
        // Tisch 3 Stuhl 2
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(740, 395, 40, 40);
        // Tisch 3 Stuhl 3
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(680, 335, 40, 40);
        // Tisch 3 Stuhl 4
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(800, 335, 40, 40);
        // Tisch 4
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(730, 105, 60, 60);
        // Tisch 4 Stuhl 1
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(740, 55, 40, 40);
        // Tisch 4 Stuhl 2
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(740, 175, 40, 40);
        // Tisch 4 Stuhl 3
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(680, 115, 40, 40);
        // Tisch 4 Stuhl 4
        iceshop.crc2.fillStyle = "saddlebrown";
        iceshop.crc2.fillRect(800, 115, 40, 40);
    }
    iceshop.drawTable = drawTable;
    function drawCounter() {
        console.log("Counter");
        // Schokolade
        iceshop.crc2.fillStyle = "sandybrown";
        iceshop.crc2.fillRect(260, 80, 30, 40);
        // Vanille
        iceshop.crc2.fillStyle = "lemonchiffon";
        iceshop.crc2.fillRect(260, 130, 30, 40);
        // Erbeere
        iceshop.crc2.fillStyle = "lightcoral";
        iceshop.crc2.fillRect(260, 180, 30, 40);
    }
    iceshop.drawCounter = drawCounter;
})(iceshop || (iceshop = {}));
//# sourceMappingURL=background.js.map