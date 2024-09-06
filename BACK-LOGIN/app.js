//importamos los modulos ... (rqquiere)

//1-  definimos nuestro servidor

// Importa el módulo 'express' para manejar las rutas y el servidor HTTP.
const express = require('express');

// Importa el módulo 'cors' para manejar CORS (Cross-Origin Resource Sharing) y permitir que tu servidor acepte solicitudes de diferentes dominios.
const cors = require('cors');

// Crea una instancia de la aplicación Express.
const app = express();

// Importa el módulo 'mongoose' para trabajar con MongoDB
const mongoose = require('mongoose');


//importamos modulos en node.js  . config carga las variables de entorno desde el archivo .env
// Carga las variables de entorno desde el archivo '.env' para que estén disponibles a través de process.env.
require('dotenv').config();

// Obtiene el puerto desde la variable de entorno PORT. Si no está definida, usa el puerto 5000 por defecto.
const port = process.env.PORT || 5000;

//*Configuracion de rutas

app.use(cors())

//utiliza para analizar los cuerpos de las solicitudes HTTP con formato JSON. Cuando se recibe una solicitud con un cuerpo JSON, express.json() lo convierte en un objeto JavaScript accesible a través de req.body.
app.use(express.json());

//Dirige todas las solicitudes que comienzan con /api/signup a un enrutador específico definido en el archivo './routes/signup'.
app.use('/api/signup', require('./routes/singup'))
app.use('/api/login', require('./routes/loging'))
app.use('/api/refresh-token', require('./routes/refreshToken'))
app.use('/api/signout', require('./routes/singout'))
app.use('/api/todos', require('./routes/todos'))
app.use('/api/user', require('./routes/user'))


// Define una ruta para la ruta raíz ('/')
app.get('/', (req, res)=>{
    // Envía una respuesta 'hello world' cuando se accede a esta ruta.
    res.send('hello word')
});

//iniciar el servidor y escuchar en el puerto definido
app.listen(port,() =>{
    console.log(`Server is running on port: ${port}` )
})