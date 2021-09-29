const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = 'datita';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf8');
readableStream.on('data',function(chunk){
    console.log(chunk);
});

readableStream.on('end',()=>{
    console.log(data);
})

// process.stdout.write('hola')

// Buffer intermedio de tansformacion, recibe dato lo modifica y lo escribe

// const Transform = stream.Transform; Acá no se que quiso hacer con la transformación.

// function Mayus(){
//     Transform.call(this);
// }
// util.inherits(Mayus,Transform)