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
        // Server commun
        // hndlformular();?
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
        // animateperson()
        createperson();
        // window.setInterval(animateperson, 1000) 
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
    let person = [];
    console.log(person[5]);
    // export let landingzone: Vector = new Vector(400, 500); //Vector is not a constructor? (Konsole im Browser (debugger) meckert, hab aber keine Ahnung was das Problem ist...)
    // export let hikingzone: Vector = new Vector(0, 440);
    // export let flystart: Vector = new Vector(50, 150);
    function createperson() {
        for (let iperson = 0; iperson < 1; iperson++) {
            let personi = new iceshop.human(new iceshop.Vector(400, 500), new iceshop.Vector(400, 500), "happy");
            person.push(personi);
            console.log(personi);
            console.log(person);
            personi.draw(new iceshop.Vector(150, 150), new iceshop.Vector(10, 16));
        }
    }
    // function animateperson(): void {
    //     crc2.clearRect(0, 0, 1000, 600);
    //     crc2.putImageData(imgData, 0, 0);
    //     for (let personi of person) {
    //         personi.move(1 / 50); //hiermit kommt er auch nicht klar
    //         personi.draw();
    //         window.setInterval(animateperson, 10)
    //     }
    // }
})(iceshop || (iceshop = {}));
//# sourceMappingURL=script.js.map