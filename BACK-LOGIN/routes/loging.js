// definimos rutas en un modulo separado 
const router = require("express").Router();

//funsion que se ejecuta cuando se recibe una solicitud GET em la ruta definida
//req es el objeto de solicitud, y res es el objeto de respuesta.
router.get("/", (req, res)=>{
    //res.send("signup") envía la respuesta "signup" al cliente cuando se accede a esta ruta.
    res.send("login")
});

//exporta el enrutador definido en este archivo para que pueda ser usado en otros módulos de la aplicación.
module.exports = router;
