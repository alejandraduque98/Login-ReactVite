//crea la ruta
const router = require("express").Router();

//funsion que se ejecuta cuando recibe una solicitud get en la ruta definida
router.get("/", (req, res)=>{
    res.send("refreshToken")
});

module.exports = router;