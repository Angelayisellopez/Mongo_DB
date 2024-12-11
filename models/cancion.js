const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true },
  duration: { type: Number, required: true },  // duration in seconds
  url: { type: String, required: true },  // URL to the song
});

const canciones = mongoose.model("Song", songSchema);

module.exports = canciones;
