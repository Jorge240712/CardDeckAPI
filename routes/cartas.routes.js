const express = require("express");
const router = express.Router();

const {
    obtenerCartas,
    obtenerCartaPorId,
    crearCarta,
    actualizarCarta,
    eliminarCarta
} = require("../controllers/cartas.controller");

router.get("/", obtenerCartas);
router.get("/:id", obtenerCartaPorId);
router.post("/", crearCarta);
router.put("/:id", actualizarCarta);
router.delete("/:id", eliminarCarta);

module.exports = router;