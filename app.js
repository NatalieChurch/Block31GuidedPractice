import express from "express";
import playlist from "#db/playlist";

const app = express();

app.get('/', (req, res) => {
    res.send("You've reached the Playlist API!");
  });

app.get('/playlist', (req, res) => {
    res.send(playlist);
})

app.get('/playlist/:index', (req, res) => {
    
    const num = Number(req.params.num)
    const found = playlist.includes(num)
    res.status(200).send({exists:found});
})

export default app