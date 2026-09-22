import express from 'express';

const app = express()

console.log(app);

app.get('/home', (req,res) => {
    res.send('Yoooooooooo');
});

const port = 3000

app.listen(port, ()=>{
    console.log('Server is live on port.');
});

app.get('/', (req, res) => {
   res.send('Hello World!')
})
