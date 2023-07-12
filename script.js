"use strict";
var iceshop;
(function (iceshop) {
    window.addEventListener("load", hndload);
    iceshop.canvas = document.querySelector("canvas");
    function hndload() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        iceshop.crc2 = canvas.getContext("2d");
        iceshop.drawBackground();
    }
    iceshop.hndload = hndload;
})(iceshop || (iceshop = {}));
//# sourceMappingURL=script.js.map