# Etereo frontend react challenge

Este es un ejercicio para crear un simple catálogo de teléfonos de acuerdo con las instrucciones de `./STATEMENTS.md` de la empresa [etereo.io](https://etereo.io).

Se han creado las entidades:

* `phones`:
  * Gestiona un listado de teléfonos.
  * Cada teléfono cuenta con los datos: `id`, `img`, `model` y `price`.
  * Se solicita a través del endpoint `/phones`.
* `phoneDetail`:
  * Gestiona un solo teléfono con todos sus campos.
  * Cada teléfono cuenta con los datos: `id`, `descripction`, `img`, `model`, `price` y `screen`.
  * Se solicita a través del endpoint `/phones/:id`.

Cada una de estas entidades cuenta con su fichero de action, reducer, endpoint en el server y en la webapp.

Se han cargado 22 teléfonos en una base de datos fake.

## Instalación y comandos de utilidad

Ejecutar `npm install` para instalar las dependencias del proyecto.

Ejecutar `npm run format:js` para formatear el código del proyecto.

Ejecutar `npm run lint:js` para pasar el linter al código del proyecto.

## Tests

Ejecutar `npm install` para instalar las dependencias del proyecto.

Se han realizado tests unitarios en la webapp:

* Redux actions ya que suponen la comunicación de las entidades de la webapp.
* Redux reducres ya que suponen la lógica de negocio de la webapp.
* API ya que es el único punto de entrada de datos de la aplicación y por ello es el lugar más sensible. En el API se ha puesto especial atención al control de errores de los datos de entrada.
* No se han realizado tests de los componentes visuales por falta de tiempo, tener menos lógica y ser fácilmente testeables visualmente.

No se han realizado tests del server por falta de tiempo.

## Servidor

Ejecutar `npm run server-start` en una consola para arrancar el servidor.

El servidor usa la librería propia [Micro tasks](https://github.com/migueldelmazo/micro-tasks) donde cada endopoint (definido en un JSON) es una tarea (array) formada por varias acciones (objets) como:

* Recoger los datos de entrada de la petición.
* Validar y normalizar los datos de entrada.
* Acceder a base de datos.
* Gestionar posibles errores.
* Responder la petición.

El servidor habilita los endpoints:

* http://localhost:3001/api/phones (y http://localhost:3001/api/phones?paginationCurrentPage=:page&paginationSize=:size) definido en `./server/endpoints/phones.js`.
* http://localhost:3001/api/phones/:id definido en `./server/endpoints/phoneDetail.js`.

Para definir acciones personalizadas y que sean usadas por las tareas del endpoint se pueden definir como se hace en el fichero `./server/tasks/fakeSQL` o `./server/tasks/express`.

Para este ejercicio se ha creado una base de datos llamada `fakeSql` que tiene un único método llamado `query` que genera los datos solicitados bajo demanda.

**Importante:** los endpoints http://localhost:3001/api/phones?paginationCurrentPage=3 y http://localhost:3001/api/phones/3 devuelven un error 500 para poder probar casos de error en la webapp.

## Webapp

Ejecutar `npm run webapp-start` en otra consola para arrancar la webapp que se sirve desde http://localhost:3000.

Los componentes React de la webapp son:

* `/components/app`: componentes genéricos del proyecto.
* `/componests/catalog`: componentes genéricos para un catálogo que puede ser usado en cualquier proyecto. El componente `PhoneListContainer` solicitado en el enunciado de la prueba se ha renonbrado a `Catalog.js`.
* `/components/phone`: componentes propios de este proyecto. El componente `PhoneDetailComponent` solicitado en el enunciado de la prueba se ha renonbrado a `PhoneDetail.js`.

## Evaluación de la prueba

* He optado por una programación muy legible y mantenible, para que cualquier desarrollador pudiera evolucionar el proyecto.
* He optado por realizar métodos lo más pequeños posbiles y auto descriptibles para facilitar los refactors y minimizar la documentación.
* No se ha realizado la tarea de asociar la paginación a través del `queryParams` de la URL, pero de haberlo hecho hubiera:
  * Usado `ReactRouter` asociándolo a `Redux`.
  * Los links de la paginación pulsados por el usuario son elementos `<a />` que NO son manejados por la webapp produciendo así un cambio en la URL.
  * Cualquier cambio producido en la URL por un link `<a />`, refresco de la página o botones del historial del navegador son escuchados por la webapp.
  * De esta forma utilizamos como única fuente de verdad el queryParam de la URL.
  * Ante cualquier cambio en la URL se asegura el valor de la página actual en el store y se lanza la correspondiente request al API.
* Ante cualquier duda o si se desea que explique las decisiones tomadas no duden en ponerse en contacto conmigo.
