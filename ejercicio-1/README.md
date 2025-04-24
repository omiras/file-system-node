# JSON para almacenar datos

Según [20 minutos](https://www.20minutos.es/noticia/5458479/0/hacienda-envia-cartas-contribuyentes-alertar-posibles-errores-declaracion-renta/), hacienda enviará 80000 cartas a contribuyentes que han cometido un _error_ en la declaración de la renta. 

La ministra nos ha pedido un script para automatizar esta tarea, y dado un DNI, saber si hay que enviarle una notificación a dicho contribuyente o no.

## Iteración 1

Carga el JSON usando NodeJS, y muestra **todo** el contenido del JSON por el terminal

![](https://oscarm.tinytake.com/media/16447e1?filename=1718096895261_file-system-iteration+1.png&sub_type=thumbnail_preview&type=attachment&width=1199&height=568)

## Iteración 2

Modifica tu script para ahora mostrar solo el nombre de cada una de las personas de este fichero. La variable que devuelve la función JSON.parse es un array de objetos. Debes recorrer el array  y mostrar solo el nombre de cada persona. 

![](https://oscarm.tinytake.com/media/16447f8?filename=1718097097129_file-system-2.png&sub_type=thumbnail_preview&type=attachment&width=799&height=327)

## Iteración 3

Cambia el valor de la variable _dni_ a un dni, que exista, o no, en el fichero JSON. Muestra un mensaje por consola indicando dicha persona tiene notificaciones pendientes con hacienda o no. Mira el ejemplo.

![](https://oscarm.tinytake.com/media/1644854?filename=1718097779615_TinyTake11-06-2024-11-22-41_638536945802517760.png&sub_type=thumbnail_preview&type=attachment&width=1198&height=520)

Estas ante un reto algorítmico. Es el caso de uso de buscar un elemento en un array si cumple cierta condición. 


## Iteración 4

La ministra nos ha pedido un registro de toda esta actividad. Guarda en un fichero de nombre **notificaciones.txt** el mensaje que muestras por consola en la iteración anterior.

![](https://oscarm.tinytake.com/media/164488c?filename=1718098283553_TinyTake11-06-2024-11-30-49_638536950836671365.png&sub_type=thumbnail_preview&type=attachment&width=1198&height=334)

No debes sobreescribir el contenido del fichero si no añadir la información al final del mismo.

## Iteración Bonus

Elimina la variable _dni_ y permite que el usuario ejecute el script pasando un parámetro con el dni a buscar:

`node app.js 23123456E`




