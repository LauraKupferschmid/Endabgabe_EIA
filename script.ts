namespace iceshop {

  window.addEventListener("load", hndload);

  export let imgData: ImageData;
  export let crc2: CanvasRenderingContext2D;
  export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;

  export let gamecanvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
  export let ctx = canvas.getContext('2d')!;

  export function hndload() {
    // canvas def
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
      return;
    crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d");
    

    //startpage
    startPage();
    document.getElementById("startbtn")?.addEventListener("click",start);

    // Funktionsaufruf
    drawBackground();
    drawTable();
    drawCounter();
    hndlformular();  // Server communi


    imgData = ctx.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

    ctx.putImageData(imgData, 0, 0);

    createWaiter();
    createCutsomer();
    

  }

  export function startPage() {
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
    document.querySelector("canvas")?.classList.remove("hidden");
    document.getElementById("game-canvas")?.classList.remove("hidden");
    document.getElementById("start_p")?.classList.add("hidden");
    document.getElementById("startbtn")?.classList.add("hidden");
    document.getElementById("div1")?.classList.remove("hidden");
  };

  // Get the canvas element
  gamecanvas = document.getElementById('game-canvas') as HTMLCanvasElement;

  // let custom: customer[] = []; // brauch ich für später für mehrere customer

  // console.log(wait[0])

  function createWaiter(): void {
          let waiteri: waiter = new waiter(gamecanvas);
          waiteri.draw();  
    
  }

  function createCutsomer(): void {
          let customeri: customer = new customer(gamecanvas);
          // custom.push(customeri); //brauch ich am ende für mehrere customer + for-schleife fürs erzeugen
          customeri.draw();
  }

}