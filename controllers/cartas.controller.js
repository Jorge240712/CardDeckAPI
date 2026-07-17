const cartas = require("../data/cartas");

// GET 
const obtenerCartas = (req, res) => {
    res.json(cartas);
};

// GET POR ID
const obtenerCartaPorId = (req, res) => {
    let id = parseInt(req.params.id);
    let carta = cartas.find(c => c.id === id);

    if (!carta) {
        return res.status(404).json({ error: "Carta no encontrada" });
    }

    res.json(carta);
};

// POST : CREAR NUEVA CARTA
const crearCarta = (req, res) => {
    let nuevaCarta = { id: cartas.length + 1, ...req.body };
    cartas.push(nuevaCarta);
    res.json({ mensaje: "Carta registrada", carta: nuevaCarta });
};

// PUT : ACTUALIZAR CARTA
const actualizarCarta = (req, res) => {
    let id = parseInt(req.params.id);
    let indice = cartas.findIndex(c => c.id === id);
    
    if (indice === -1) {
    return res.status(404).json({ error: "Carta no encontrada" });
    }

    cartas[indice] = { id: id, ...req.body };
    res.json({ mensaje: "Carta actualizada", carta: cartas[indice] });

};

// DELETE: eliminar carta
const eliminarCarta = (req, res) => {
    let id = parseInt(req.params.id);

    let indice = cartas.findIndex(c => c.id === id);

    if (indice === -1) {
        return res.status(404).json({ error: "Carta no encontrada" });
    }

    let cartaEliminada = cartas.splice(indice, 1);

    res.json({
        mensaje: "Carta eliminada correctamente",
        carta: cartaEliminada[0]
    });
};

module.exports = {
  obtenerCartas,
  obtenerCartaPorId,
  crearCarta,
  actualizarCarta,
  eliminarCarta
};