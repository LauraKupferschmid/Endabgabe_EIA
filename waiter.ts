namespace iceshop{

    class waiter extends human{

        // position: Vector;
        // velocity: Vector;
        // mood: string;

        // constructor(_velocity: Vector, _position: Vector, _mood: string) {

        //     this.velocity = new Vector(50, 0);
        //     this.velocity.randomize(120, 20);
        //     this.velocity = _velocity;

        //     this.position = new Vector(150, 20);
        //     this.position = _position;

        //     this.mood = "happy";
        //     this.mood = _mood;
        // }

        draw(_position: Vector, _size: Vector){

            //face
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.arc(400,300,20,0,2*Math.PI);
            crc2.fill();
            crc2.closePath();

            //eyes
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(395,295,2,0,2*Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(405,295,2,0,2*Math.PI);
            crc2.fill();
            crc2.closePath();

            //mouth

            crc2.strokeStyle


        }

    }
}