# Etereo frontend react challenge

Este es un ejercicio para crear un simple catálogo de teléfonos.

## How to

Ejecutar `npm install` para instalar las dependencias del proyecto.

## Servidor

Ejecutar `npm run server-start` en una consola para arrancar el servidor.

El servidor habilita los endpoints:

* http://localhost:3001/api/phones
* http://localhost:3001/api/phones?paginationCurrentPage=:page&paginationSize=:size
* http://localhost:3001/api/phones/:id

El servidor se basa en [Micro tasks](https://github.com/migueldelmazo/micro-tasks).
Este sistema se definen las acciones a realizar por un endpoint en un array.

De esta forma el endpoint http://localhost:3001/api/phones se define con las acciones del fichero ./server/endpoints/phones.js.

Para definir tareas personalizadas y que sean usadas por el endpoint se pueden definir como se hace en el fichero ./server/endpoints/tasks.js.

Para este ejercicio se ha creado una base de datos llamada fakeSql que genera los datos solicitados bajo demanda.

**Importante:** los endpoints http://localhost:3001/api/phones?paginationCurrentPage=3 y http://localhost:3001/api/phones/3 devuelven errores 500 para poder probar casos de error en el cliente.

## Cliente

Ejecutar `npm run client-start` en otra consola para arrancar el cliente.

El cliente se sirve desde http://localhost:3000
