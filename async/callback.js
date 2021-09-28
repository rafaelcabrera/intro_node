function soyAsincrona(miCallback){
    console.log("soy asincrona")
    setTimeout(()=>{
        console.log('Estoy esperando')
        miCallback();
    },1000);

}
console.log("Iniciando Proceso");
soyAsincrona(()=>{
    console.log('Terminando proceso...');
})