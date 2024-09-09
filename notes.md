# Estructura del proyecto "construccion API Rest sologomas"

- ### Configuracion del proyecto: 
    + Iniciamos una nueva aplicación node
    + creamos nuestro archivo app.js
    + Declaramos nuestro archivo app.js en el json generado por node.
    + Instalamos Express, y Nodemon (nodemon como dependencia de desarrollo)

            npm init -y
            express i 
            nodemon i -D

- ### Creación del servidor con Express.js:
    + importamos express
    + Agregamos "type":"module" a nuestro json para que podamos trabajar con los imports de esta manera, ya que node no los entiende por si solo.
    + le damos el valor de express a una constante app
    + Ponemos a nuestra app a escuchar con la función integrada de express "listen";

            import express from "express";

            const app = express();

            app.listen(3000);
            console.log("all is running in 3000 port");

- ### Definición de rutas
    - Definimos una ruta y los diferentes metodos de consultas: GET, POST, PUT y DELETE.
            
            app.get('/heros', (req, res)=>{res.send("hi there, i'm all heroes of the world.")});
            app.post('/heros', (req, res)=>{res.send("training new hero")});
            app.put('/heros', (req, res)=>{res.send("Hero in time Chamber")});
            app.delete('/heros', (req, res)=>{res.send("deleting hero")});

            app.listen(3000)
            console.log("all is running in 3000 port")


 ### Coneccion con la base de datos (Mysql)

 ### Rutas del servidor
    - Creamos la carpeta routes y llevamos todas las rutas que en un inicio estaban en app.js.
    - Definimos un archivo para las rutas de consulta de la base de datos:
    get post put y delete;
    -definimos un archivo para la ruta de coneccion con Mysql.

### Definición de controladores
