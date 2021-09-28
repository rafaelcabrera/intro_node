const {exec, spawn} = require('child_process'); //destructuring
// const exec = require('child_process'.exec) es lo mismo que arriba

exec('dir', (err,stdout, sterr)=>{
    if(err){
        console.error(err);
        return false;
    }
    console.log(stdout);
})

//esto lo tengo que volver a hacer en linux