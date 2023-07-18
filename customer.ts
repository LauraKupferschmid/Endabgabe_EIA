namespace iceshop {
    export class customer extends human {

        draw(_position: Vector, _size: Vector) {
            console.log(this.mood)
          if (this.mood == "happy"){
                //face
                crc2.fillStyle = "yellow";
                crc2.beginPath();
                crc2.arc(400, 300, 22, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();

                //eyes
                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.arc(394, 298, 3, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();

                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.arc(406, 298, 3, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();

                // mouth happy
                crc2.strokeStyle = "black";
                crc2.beginPath();
                crc2.arc(400, 305, 4, 0, 1 * Math.PI);
                crc2.stroke();
                crc2.closePath();
            };

            if (this.mood == "annoyed"){

                //face
                crc2.fillStyle = "yellow";
                crc2.beginPath();
                crc2.arc(400, 300, 22, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();

                //eyes
                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.arc(394, 298, 3, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();

                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.arc(406, 298, 3, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();
                
             
                // mouth anooyed
                crc2.strokeStyle = "black";
                crc2.beginPath();
                crc2.arc(395, 308, 4, 1.3 * Math.PI, 2 * Math.PI);
                crc2.stroke();
                crc2.closePath();
                crc2.rotate(90);

            };
             
            if (this.mood == "mad"){
                //face
                crc2.fillStyle = "yellow";
                crc2.beginPath();
                crc2.arc(400, 300, 22, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();

                //eyes
                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.arc(394, 298, 3, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();

                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.arc(406, 298, 3, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();

                // //mouth unhappy
                crc2.strokeStyle = "black";
                crc2.beginPath();
                crc2.arc(400, 308, 4, 1 * Math.PI, 2 * Math.PI);
                crc2.stroke();
                crc2.closePath();
        
            }

        };
    }



}