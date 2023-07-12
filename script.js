"use strict";
var iceshop;
(function (iceshop) {
    window.addEventListener("load", hndload);
    iceshop.canvas = document.querySelector("canvas");
    function hndload() {
        // canvas def
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        iceshop.crc2 = canvas.getContext("2d");
        // Server comm
        // hndlformular();
        // Funktionsaufruf
        iceshop.drawBackground();
        iceshop.drawTable();
    }
    iceshop.hndload = hndload;
})(iceshop || (iceshop = {}));
//# sourceMappingURL=script.js.map