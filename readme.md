# Módulo 9 - Llamadas asíncronas - Laboratorio
Acabamos de recibir un encargo de Netflix. Quieren promocionar una de sus conocidas series, Rick y Morty, y necesitan una pequeña aplicación creada con Javascript para mostrar información sobre sus personajes.

La aplicación debe mostrar un listado con la foto y nombre de los personajes (characters) de la serie. Al hacer click sobre uno de ellos se mostrará más información acerca del mismo: foto, nombre, estado y especie.

Según nos comentan, podemos recuperar los datos de su API. Nos envían esta documentación: The Rick and Morty API

En esta documentación hemos podido ver que la ruta base de la api es "https://rickandmortyapi.com/api", y tenemos disponibles los siguientes endpoints:

+ Recuperar todos los personajes: /api/character
+ Recuperar un personaje: /api/character/{id}

Para crear el listado y el detalle, nos facilitan un fichero utils.js del que nos detallan que debemos utilizar la siguiente funcionalidad:

+ **createCharacterRow:** debemos utilizar esta función para que nos devuelva un elemento HTML con la fila del personaje que recibe por parámetro.
+ **showCharacter:** debemos utilizarla para que nos muestre el detalle del personaje que recibe por parámetro.

Nos comentan los siguientes puntos:

+ Separar un fichero data-business.js con la funcionalidad de comunicación con su API.
Podemos utilizar fetch o axios para realizar las peticiones de datos.
+ Podemos entregar la aplicación en un .zip o hacer un fork de un CodeSandbox inicial que nos pasan con el contenido de los ficheros anteriores: [rick-and-morty-characters - CodeSandbox](https://codesandbox.io/s/rick-and-morty-characters-forked-ikg269?file=/src/index.js)

Además:

+ De forma **obligatoria** para que puedan evaluar nuestro trabajo, tendremos que entregar la aplicación con el listado de personajes.
+ Como **extra**, tendremos que hacer funcionar el click en cada personaje para mostrar el detalle del mismo.
+ **¡Y nos proponen un par de retos!:** -- Utilizar otro de los endpoints de su API para recuperar y mostrar más datos, como un listado de episodios o localizaciones