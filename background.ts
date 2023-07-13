namespace iceshop{

    export function drawBackground(): void {
        console.log("Background");

        // boden
        crc2.fillStyle ="lightblue";
        crc2.fillRect(0, 0,900,4890);

        // gehweg
        crc2.fillStyle ="grey";
        crc2.fillRect(0,500,900,60);

        // wand
        crc2.fillStyle ="black";
        crc2.fillRect(0,490,50,10);

        crc2.fillStyle ="black";
        crc2.fillRect(200,490,700,10);

        // Theke
        crc2.fillStyle ="grey";
        crc2.fillRect(250,50,50,170);

        crc2.fillStyle ="grey";
        crc2.fillRect(0,220,300,50);
    }

    export function drawTable(): void {
        console.log("Tisch");

        // Tisch 1
        crc2.fillStyle ="saddlebrown";
        crc2.fillRect(480, 105,60,60);

            // Tisch 1 Stuhl 1
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(490, 55,40,40);

            // Tisch 1 Stuhl 2
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(490, 175,40,40);

            // Tisch 1 Stuhl 3
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(430, 115,40,40);

            // Tisch 1 Stuhl 4
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(550, 115,40,40);


        // Tisch 2
        crc2.fillStyle ="saddlebrown";
        crc2.fillRect(480, 325, 60,60);

            // Tisch 2 Stuhl 1
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(490, 275,40,40); 

            // Tisch 2 Stuhl 2
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(490, 395,40,40);

            // Tisch 2 Stuhl 3
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(430, 335,40,40);
 
            // Tisch 2 Stuhl 4
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(550, 335,40,40);

        // Tisch 3
        crc2.fillStyle ="saddlebrown";
        crc2.fillRect(730, 325, 60,60);

            // Tisch 3 Stuhl 1
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(740, 275,40,40); 

            // Tisch 3 Stuhl 2
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(740, 395,40,40);

            // Tisch 3 Stuhl 3
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(680, 335,40,40);
 
            // Tisch 3 Stuhl 4
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(800, 335,40,40);

        // Tisch 4
        crc2.fillStyle ="saddlebrown";
        crc2.fillRect(730, 105,60,60);
 
            // Tisch 4 Stuhl 1
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(740, 55,40,40);
 
            // Tisch 4 Stuhl 2
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(740, 175,40,40);
 
            // Tisch 4 Stuhl 3
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(680, 115,40,40);
 
            // Tisch 4 Stuhl 4
            crc2.fillStyle ="saddlebrown";
            crc2.fillRect(800, 115,40,40);
    }

    export function drawCounter(): void {
        console.log("Counter");

        // Schokolade
        crc2.fillStyle ="sandybrown";
        crc2.fillRect(260,80,30,40);

        // Vanille
        crc2.fillStyle ="lemonchiffon";
        crc2.fillRect(260,130,30,40);

        // Erbeere
        crc2.fillStyle ="lightcoral";
        crc2.fillRect(260,180,30,40);

    }


    
}