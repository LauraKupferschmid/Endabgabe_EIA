namespace iceshop{

    export class human {

        position: Vector;
        velocity: Vector;
        mood: string;

        constructor(_velocity: Vector, _position: Vector, _mood: string) {


            this.velocity = new Vector(50, 0);
            this.velocity = new Vector(120, 20);

            this.position = new Vector(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height)

            this.position = new Vector(150, 20);
            this.position = _position;

            this.mood = "happy";
            this.mood = _mood;
        }

        draw(_position: Vector, _size: Vector){

            //face
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.arc(400,300,22,0,2*Math.PI);
            crc2.fill();
            crc2.closePath();

            //eyes
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(394,298,3,0,2*Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(406,298,3,0,2*Math.PI);
            crc2.fill();
            crc2.closePath();

            // mouth happy
            crc2.strokeStyle = "Black";
            crc2.beginPath();
            crc2.arc(400,305,4,0,1*Math.PI);
            crc2.stroke();
            crc2.closePath();

        }

        move(): void {
        }


        }

}