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