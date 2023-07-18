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
        // Server communi
        //startpage
        // start_page();
        // document.getElementById("startbtn")?.addEventListener("click",start)
        // Funktionsaufruf
        iceshop.drawBackground();
        iceshop.drawTable();
        iceshop.drawCounter();
        iceshop.hndlformular();
        iceshop.imgData = iceshop.crc2.getImageData(0, 0, iceshop.crc2.canvas.width, iceshop.crc2.canvas.height);
        iceshop.crc2.putImageData(iceshop.imgData, 0, 0);
        createWaiter();
        createCutsomer();
        // animateperson();
        animatewaiter();
        // window.setInterval(animateperson, 1000) 
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
    let custom = [];
    let wait = [];
    console.log(wait[0]);
    function createWaiter() {
        for (let iwait = 0; iwait < 1; iwait++) {
            let waiti = new iceshop.waiter(new iceshop.Vector(0, 0), new iceshop.Vector(600, 300), "happy");
            wait.push(waiti);
            console.log(waiti);
            console.log(waiti);
        }
    }
    function createCutsomer() {
        for (let icustom = 0; icustom < 1; icustom++) {
            let personi = new iceshop.customer(new iceshop.Vector(30, 30), new iceshop.Vector(200, 400), "happy");
            custom.push(personi);
            console.log(personi);
            console.log(custom);
        }
    }
    // function animateperson(): void {
    //     crc2.clearRect(0, 0, 1000, 600);
    //     crc2.putImageData(imgData, 0, 0);
    //     for (let personi of custom) {
    //         // personi.move(); //hiermit kommt er auch nicht klar
    //         personi.draw(new Vector(250, 250), new Vector(50, 50));
    //         // window.setInterval(animateperson,200)
    //     }
    // }
    function animatewaiter() {
        iceshop.crc2.clearRect(0, 0, 1000, 600);
        iceshop.crc2.putImageData(iceshop.imgData, 0, 0);
        for (let waiti of wait) {
            waiti.move();
            waiti.draw(new iceshop.Vector(20, 20), new iceshop.Vector(50, 50));
        }
        for (let personi of custom) {
            personi.move();
            personi.draw(new iceshop.Vector(300, 300), new iceshop.Vector(50, 50));
        }
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