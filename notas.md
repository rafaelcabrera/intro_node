## Event Queue: 
_Contiene_ todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.
***
## Event Loop: 
Se encarga de _resolver_ los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.
***
## Thread Pool: 
Se encarga de _gestionar_ los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.
***
![](https://i.ibb.co/j42621b/event-loop.png)

### Variables de entorno
##### RESUMEN:




Buffer
Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal.

Es la forma mas cruda en la que se pueden almacenar los datos. (Se guardan en bytes y no se especifica el tipo de dato)

En la consola, los datos se muestran en formato hexadecimal.

<h3>Creacion de un bufer básico</h3>
Para crear un buffer, con 4 espacios por ejemplo, podemos hacerlo con la siguiente sintaxis.

let buffer = Buffer.alloc(4);
console.log(buffer); 
// Output:
//<Buffer 00 00 00 00>
<h3>Otras formas de crear un buffer</h3>
Datos en un arreglo

let buffer2 = Buffer.from([1,2,3]);
console.log(buffer2);
Datos de tipo string

let buffer3 = Buffer.from('Hola');
console.log(buffer3);
console.log(buffer3.toString());
Guardar el abecedario en un buffer

let abc =  Buffer.alloc(26);
console.log(abc);

for (let i = 0; i< abc.length; i++){
  abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString())

Las variables de entorno son una forma de llamar información de afuera a nuestro software, sirve para definir parámetros sencillos de configuración de los programas de modo que puedan ejecutarse en diferentes ambiente sin necesidad de modificar el código fuente de un script.

El objeto process nos da información sobre el procesos que está ejecutando este script.
La propiedad env es la que nos da acceso a las variables de entorno de manera sencilla.



![](https://static.platzi.com/media/user_upload/global-fa55c760-fa57-43f2-a670-a86345c49c42.jpg)

### Console
Con console podemos imprimir todo tipo de valores por
nuestra terminal.

console.log: recibe cualquier tipo y lo muestra en el consola.
console.info: es equivalente a log pero es usado para informar.
console.error: es equivalente a log pero es usado para errores.
console.warn: es equivalente a log pero es usado para warning.
console.table: muestra una tabla a partir de un objeto.
console.count: inicia un contador autoincremental.
console.countReset: reinicia el contador a 0.
console.time: inicia un cronometro en ms.
console.timeEnd: Finaliza el cronometro.
console.group: permite agrupar errores mediante identación.
console.groupEnd: finaliza la agrupación.
console.clear: Limpia la consola.