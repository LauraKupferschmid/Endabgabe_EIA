namespace iceshop {

    export class waiter extends human {


        draw(_position: Vector, _size: Vector) {
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
            crc2.strokeStyle = "Black";
            crc2.beginPath();
            crc2.arc(400, 305, 4, 0, 1 * Math.PI);
            crc2.stroke();
            crc2.closePath();

            // fliege
            crc2.fillStyle = "Black";
            crc2.beginPath();
            crc2.moveTo(390,315);
            crc2.lineTo(390,325);
            crc2.lineTo(410,315);
            crc2.lineTo(410,325);
            crc2.lineTo(390,315);
            crc2.fill();
            crc2.closePath


        }

    }
}