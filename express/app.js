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
app.use(express.json());
const bookData = JSON.parse(fs.readFileSync('./data/books.json'));

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

app.get("/api/v1/books/:id" , (req,res) => {
    //let c = req.params.id;
    // const book = bookData.find(book=> book.id === c);
    // res.send(book);
    // let i=0;
    // while(i<24){
    //     if (bookData[i].id===c){
    //         res.send(bookData[i])
    //     }
    //     i++
    // }
    try {
        let c = req.params.id;
        const book = bookData.find(book=> book.id === c);
        if(!book){
            res.status(400).json({
                status: "Fail",
                message: "Book not Found!!"
            })
        }
        else{
            res.status(200).json({
                status: "Success",
                data:{
                    book:book
                }
            })
        }
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: "Sheeeeeeet"
        })
    }
});

app.post("/api/v1/books" , (req,res) => {
    bookData.push(req.body);
    fs.writeFileSync("./data/books.json" , JSON.stringify(bookData));
    try {
        res.status(201).json({
        status : "Success",
        message : "Book data succesfully added"
    })
    } catch (error) {
        res.status(400).json({
            status : "Fail",
            message : "Book data not added"
        })
    }
});

app.patch("/api/v1/books/:id" , (req,res) => {
    let c = req.params.id;
    const bookToUpdate = bookData.find(book=>book.id === c);
    let index = bookData.indexOf(bookToUpdate);
    console.log(bookToUpdate);
    console.log(req.body);
    const updateBook = Object.assign(bookToUpdate,req.body);
    bookData[index] = updateBook;
    fs.writeFileSync("./data/books.json" , JSON.stringify(bookData));
    try {
        res.status(200).json({
        status : "Success",
        data : {
            book : updateBook,
            message : "Book updated Succesfully"
        }
    })
    } catch (error) {
        res.status(400).json({
            status : "Fail",
            message : "Book not updated"
        })    
    }
});

app.listen(5500,'127.0.0.1',()=>{
    console.log('server is running!!!!');
});