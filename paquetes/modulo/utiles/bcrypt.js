const bcrypt = require('bcrypt');
// import * as bcrypt from 'bcrypt';
// const saltRounds = 10;

const password = '1234Segura!';

bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);
    bcrypt.compare(password, hash, (err, res) => {
        //console.log(err);
        console.log(res);
    });
}) //pass ronda y funcion

//tarea que lo guarde en archivo.
//en vez de callback se puede usar promesa