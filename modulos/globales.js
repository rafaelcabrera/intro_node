// con require se pueden pedir modulos y exportar con export

// console.log(global);
i = 0;
let intervalo = setInterval(function(){
    console.log("Hola");
    if (i === 3){
        clearInterval(intervalo);
    }
    i++
},1000);

console.log(__dirname)

globalThis.myvariable = "hola"

console.log(myvariable)


setImmediate(function(){
console.log('Hola');
});