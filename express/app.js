import express from 'express';
import fs from 'fs';

const app = express();
const home = fs.readFileSync('./index.html', 'utf-8');

app.get('/', (req, res) => {
   res.send(home);
})

app.get('/home', (req,res) => {
    res.send('Yoooooooooo');
});

const port = 3000

app.listen(port, ()=>{
    console.log('Server is live on port.');
});
