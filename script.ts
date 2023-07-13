namespace iceshop{

    window.addEventListener("load", hndload)

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;

    export function hndload(){

        // canvas def
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d")

        // Server comm
        // hndlformular();

        // Funktionsaufruf
        drawBackground();
        drawTable();
        drawCounter();
        hndlformular();
    }

}