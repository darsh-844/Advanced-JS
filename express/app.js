// import express from 'express';
// import fs from 'fs';

// const app = express();
// const home = fs.readFileSync('./index.html', 'utf-8');

// app.get('/', (req, res) => {
//    res.send(home);
// })

// app.get('/home', (req,res) => {
//     res.send('Yoooooooooo');
// });

// const port = 3000

// app.listen(port, ()=>{
//     console.log('Server is live on port.');
// });

import express from 'express';
import fs from 'fs';

const app = express();
const bookData = fs.readFileSync('./data/books.json');

JSON.parse(bookData);
console.log(bookData.length);

app.get("/api/v1/books",(req,res)=>{
    try {
         res.status(200).json({
        status: "Success",
        code: 200,
        data: { 
            book : bookData
        },
        count: bookData.length
    });
    } catch (error) {
        res.status(404).json({
            code:404,
            message: "Error 404"
        });
    }
});

app.listen(5500,'127.0.0.1',()=>{
    console.log('server is running!!!!');
});