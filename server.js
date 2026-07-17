require("dotenv").config()
let express = require("express")
let app = express()

const cartasRoutes = require("./routes/cartas.routes");

app.use(express.json())
app.use("/cartas", cartasRoutes);

// Middleware de errores 👇
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        error: "Error interno del servidor"
    });
});



let PORT = process.env.PORT || 3000

app.listen(PORT, function () {
    console.log("🃏 CardDeckAPI corriendo en el puerto " + PORT)
})