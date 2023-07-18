namespace iceshop {

    window.addEventListener("load", hndload)

    export let imgData: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;

    export function hndload() {

        // canvas def
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d")
        // Server communi

        //startpage
        // start_page();
        // document.getElementById("startbtn")?.addEventListener("click",start)

        // Funktionsaufruf
        drawBackground();
        drawTable();
        drawCounter();
        hndlformular();


        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);


        crc2.putImageData(imgData, 0, 0);

        
        createWaiter();
        createCutsomer();
        // animateperson();
        animatewaiter();
        // window.setInterval(animateperson, 1000) 
        // window.setInterval(animatewaiter, 1000) 
 
    }

    export function start_page() {
        let p_start = document.createElement("p");
        p_start.innerHTML = "Begin Game";
        p_start.setAttribute("id", "start_p")

        let btn_start = document.createElement("button");
        btn_start.innerHTML = "Start";
        btn_start.setAttribute("id", "startbtn");

        document.querySelector("body")?.appendChild(p_start);
        document.querySelector("body")?.appendChild(btn_start);
    }

    export function start() {
        document.querySelector("canvas")?.classList.remove("hidden")
        document.getElementById("start_p")?.classList.add("hidden")
        document.getElementById("startbtn")?.classList.add("hidden")
        document.getElementById("div1")?.classList.remove("hidden")
    }

    let custom: customer[] = [];
    let wait: waiter[] = [];

    console.log(wait[0])

    function createWaiter(): void {
        for (let iwait: number = 0; iwait < 1; iwait++) {
            let waiti: human = new waiter(new Vector(0, 0), new Vector(600, 300), "happy");
            wait.push(waiti);
            console.log(waiti);
            console.log(waiti);
        }
    }

    function createCutsomer(): void {
        for (let icustom: number = 0; icustom < 1; icustom++) {
            let personi: human = new customer(new Vector(30, 30), new Vector(200, 400),"happy");
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

    function animatewaiter(): void {
        crc2.clearRect(0, 0, 1000, 600);
        crc2.putImageData(imgData, 0, 0);

        for (let waiti of wait) {
            waiti.move();
            waiti.draw(new Vector(20, 20), new Vector(50, 50));
        }

        for (let personi of custom) {
            personi.move();
            personi.draw(new Vector(300, 300), new Vector(50, 50));
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

}