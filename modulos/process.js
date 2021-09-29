 //process viene dentro de los módulos globales. Sin Require
 //esto es una cuestión de hilos.
process.on('exit',()=>{
    console.log('el proceso acabó')
})

process.on('beforeExit',()=>{
    console.log('el proceso está por terminar')
})

process.on('uncaughtException',(err,origen)=>{ //falla de forma silenciosa.
    console.error("se me olvido de capturar un error")
})

// process.on('unCaughtException',()=>{
//     console.log('el proceso está por terminar')
// })

// functionquenoexiste();

process.on('exit',()=>{
    setTimeout(()=>{
        console.log('Esto nunca se va a ver');
    },0);
});
setTimeout(()=>{
    console.log('Esto si  se va a ver');
},0);

// El objecto process es una instancia de EventEmitter; podemos suscribirnos a el para escuchar eventos de node.

// UncaughtException: Permite capturar cualquier error que no fue caputurado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado.

// process.on('uncaughtException', (error, origen) => console.log(error, origen));
// exit: Se ejecuta cuando node detiene el eventloop y cierra su proceso principal.

// process.on('exit', () => console.log('Adios'));