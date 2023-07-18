"use strict";
var iceshop;
(function (iceshop) {
    window.addEventListener("load", hndload);
    iceshop.canvas = document.querySelector("canvas");
    iceshop.gamecanvas = document.getElementById('gameCanvas');
    iceshop.ctx = iceshop.canvas.getContext('2d');
    function hndload() {
        // canvas def
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        iceshop.crc2 = canvas.getContext("2d");
        //startpage
        startPage();
        document.getElementById("startbtn")?.addEventListener("click", start);
        // Funktionsaufruf
        iceshop.drawBackground();
        iceshop.drawTable();
        iceshop.drawCounter();
        iceshop.hndlformular(); // Server communi
        iceshop.imgData = iceshop.ctx.getImageData(0, 0, iceshop.crc2.canvas.width, iceshop.crc2.canvas.height);
        iceshop.ctx.putImageData(iceshop.imgData, 0, 0);
        createWaiter();
        createCutsomer();
    }
    iceshop.hndload = hndload;
    function startPage() {
        let p_start = document.createElement("p");
        p_start.innerHTML = "Begin Game";
        p_start.setAttribute("id", "start_p");
        let btn_start = document.createElement("button");
        btn_start.innerHTML = "Start";
        btn_start.setAttribute("id", "startbtn");
        document.querySelector("body")?.appendChild(p_start);
        document.querySelector("body")?.appendChild(btn_start);
    }
    iceshop.startPage = startPage;
    function start() {
        document.querySelector("canvas")?.classList.remove("hidden");
        document.getElementById("game-canvas")?.classList.remove("hidden");
        document.getElementById("start_p")?.classList.add("hidden");
        document.getElementById("startbtn")?.classList.add("hidden");
        document.getElementById("div1")?.classList.remove("hidden");
    }
    iceshop.start = start;
    ;
    // Get the canvas element
    iceshop.gamecanvas = document.getElementById('game-canvas');
    // let custom: customer[] = []; // brauch ich für später für mehrere customer
    // console.log(wait[0])
    function createWaiter() {
        let waiteri = new iceshop.Waiter(iceshop.gamecanvas);
        waiteri.draw();
    }
    function createCutsomer() {
        let customeri = new iceshop.Customer(iceshop.gamecanvas);
        // custom.push(customeri); //brauch ich am ende für mehrere customer + for-schleife fürs erzeugen
        customeri.draw();
    }
})(iceshop || (iceshop = {}));
//# sourceMappingURL=script.js.map