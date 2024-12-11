
// Crear un nuevo contacto
const express = require("express");
const router = express.Router();
const Song = require("../models/cancion"); // Asumiendo que el modelo de la canción está en songModel.js

// Crear una canción
router.post("/canciones", async (req, res) => {
  try {
    const song = new Song(req.body);
    await song.save();
    res.status(201).json(song);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todas las canciones
router.get("/canciones", async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener una canción por ID
router.get("/canciones/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ error: "Canción no encontrada" });
    res.json(song);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar una canción
router.put("/canciones/:id", async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!song) return res.status(404).json({ error: "Canción no encontrada" });
    res.json(song);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar una canción
router.delete("/canciones/:id", async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) return res.status(404).json({ error: "Canción no encontrada" });
    res.json({ message: "Canción eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
