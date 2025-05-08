import app from './app.js'

const PORT = 3000; 

app.listen(PORT, () => {
    console.log(`:rocket: Server is running at http://localhost:${PORT}`);
  });