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
        // Server commun
        // hndlformular();?

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

        // animateperson();
        createperson();
        // window.setInterval(animateperson, 1000) 

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

    let person: human[] = [];

    console.log(person[5])
    
    function createperson(): void {
        for (let iperson: number = 0; iperson < 1; iperson++) {
            let personi: human = new waiter(new Vector(400, 500), new Vector(400, 500), "happy");
            person.push(personi);
            console.log(personi);
            console.log(person);
            personi.draw(new Vector(150, 150), new Vector(10, 16));
        }
        
    }

    // function animateperson(): void {
    //     crc2.clearRect(0, 0, 1000, 600);
    //     crc2.putImageData(imgData, 0, 0);

    //     for (let personi of person) {
    //         personi.move(1 / 50); //hiermit kommt er auch nicht klar
    //         personi.draw(new Vector(150, 150), new Vector(10, 16));
    //         window.setInterval(animateperson, 10)
    //     }

    // }




}