const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send('<div><h1>OOpsie</h1></div>');
});

app.get('/abc', (req,res) => {
    res.statusCode = 500;
    res.send('<div><h1>what</h1></div>');
});

app.post('/abc', (req,res) => {
    res.send('<div><h1>hellnah</h1></div>');
});

app.delete('/abc', (req,res) => {
    res.send('<div><h1>usun sie</h1></div>');
});
//sci/4c/abc
const routersci = express.Router();

routersci.get('/', (req,res) => {
    res.send('<div><h1>sci</h1></div>');
});


routersci.get('/json', (req,res) => {
    const data = [{
        key1: 'text',
        key2: 5,
    }]
    res.json(data);
});

app.use('/sci/4c/abc', routersci);

// app.post('/sci/4c/abc', (req,res) => {
//     res.send('<div><h1>hellnah</h1></div>');
// });

app.listen(8000, () =>{
    console.log('Server started!');
});