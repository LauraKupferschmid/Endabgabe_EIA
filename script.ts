namespace iceshop {

  window.addEventListener("load", hndload)

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
    crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d")
    //  if (!gamecanvas)
    //       return;
    //   ctx = <CanvasRenderingContext2D>canvas!.getContext("2d")


    // Server communi

    //startpage

    start_page();
    document.getElementById("startbtn")?.addEventListener("click",start);

    // Funktionsaufruf
    drawBackground();
    drawTable();
    drawCounter();
    hndlformular();


    imgData = ctx.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);


    ctx.putImageData(imgData, 0, 0);

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

  // Get the canvas element
  gamecanvas = document.getElementById('game-canvas') as HTMLCanvasElement;

  let custom: customer[] = [];
  let wait: waiter[] = [];

  // console.log(wait[0])

  function createWaiter(): void {
          let waiteri: Waiter = new Waiter(gamecanvas);
          waiteri.draw();  
    
  }

  function createCutsomer(): void {
          let customeri: customer = new customer(gamecanvas);
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


}