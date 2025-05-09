import express from "express";
import playlist from "#db/playlist";

const app = express();

// app.get('/', (req, res) => {
//     res.send("You've reached the Playlist API!");
//   });

// app.get('/playlist', (req, res) => {
//     res.send(playlist);
// })

// app.get('/playlist/:index', (req, res) => {
    
//     const num = Number(req.params.num)
//     const found = playlist.includes(num)
//     res.status(200).send({exists:found});
// })

 

app.route('/').get((req, res) => {
    res.send("You've reached the Playlist API!");
  });

app.route('/playlist').get((req, res) => {
    res.send(playlist);
})

app.route('/playlist/:index').get((req, res) => {
        
    const idx = Number(req.params.index)
    const found = playlist[idx]

    if(found){
        res.send(found)
    } else {
        res.status(404).send("That song does not exist in the playlist.")
    }    
})



export default app