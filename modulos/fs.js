const fs = require('fs');

function leer(ruta, cb){ //el callback es para hacer algo despues de leer
    fs.readFile(ruta, (err, data)=>{
        //archivo leído
        cb(data.toString())
    //cb(data.toString)
    })
}

function escribir (ruta, contenido, cb){
    fs.writeFile(ruta, contenido, (err)=>{
        if(err){
            console.log("no he podido" + err);
        } else {
            console.log("se ha escrito correctamente");
        }
    });
}

function borrar (ruta, cb){
    fs.unlink(ruta, cb)
}
//leer(__dirname + '/archivo.txt',console.log)

//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo',console.log)

//borrar(__dirname + '/archivo1.txt',console.log)