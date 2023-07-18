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
        //  if (!gamecanvas)
        //       return;
        //   ctx = <CanvasRenderingContext2D>canvas!.getContext("2d")
        // Server communi
        //startpage
        start_page();
        document.getElementById("startbtn")?.addEventListener("click", start);
        // Funktionsaufruf
        iceshop.drawBackground();
        iceshop.drawTable();
        iceshop.drawCounter();
        iceshop.hndlformular();
        iceshop.imgData = iceshop.ctx.getImageData(0, 0, iceshop.crc2.canvas.width, iceshop.crc2.canvas.height);
        iceshop.ctx.putImageData(iceshop.imgData, 0, 0);
        // window.addEventListener('keydown', (e) => {
        //     keys[e.key.toLowerCase()] = true;
        //   });
        //   window.addEventListener('keyup', (e) => {
        //     keys[e.key.toLowerCase()] = false;
        //   });
        createWaiter();
        createCutsomer();
        // // animateperson();
        // animatewaiter();
        // // window.setInterval(animateperson, 1000) 
        // window.setInterval(animatewaiter, 1000) 
    }
    iceshop.hndload = hndload;
    function start_page() {
        let p_start = document.createElement("p");
        p_start.innerHTML = "Begin Game";
        p_start.setAttribute("id", "start_p");
        let btn_start = document.createElement("button");
        btn_start.innerHTML = "Start";
        btn_start.setAttribute("id", "startbtn");
        document.querySelector("body")?.appendChild(p_start);
        document.querySelector("body")?.appendChild(btn_start);
    }
    iceshop.start_page = start_page;
    function start() {
        document.querySelector("canvas")?.classList.remove("hidden");
        document.getElementById("start_p")?.classList.add("hidden");
        document.getElementById("startbtn")?.classList.add("hidden");
        document.getElementById("div1")?.classList.remove("hidden");
    }
    iceshop.start = start;
    // Get the canvas element
    iceshop.gamecanvas = document.getElementById('game-canvas');
    let custom = [];
    let wait = [];
    // console.log(wait[0])
    function createWaiter() {
        let waiteri = new iceshop.Waiter(iceshop.gamecanvas);
        waiteri.draw();
    }
    function createCutsomer() {
        let customeri = new iceshop.customer(iceshop.gamecanvas);
        // custom.push(customeri); //brauch ich am ende für mehrere customer + for-schleife fürs erzeugen
        customeri.draw();
    }
    // function animateperson(): void {
    //     crc2.clearRect(0, 0, 1000, 600);
    //     crc2.putImageData(imgData, 0, 0);
    //     for (let personi of custom) {
    //         personi.move();
    //         personi.draw(new Vector(250, 250), new Vector(50, 50));
    //     }
    // }
})(iceshop || (iceshop = {}));
//# sourceMappingURL=script.js.map