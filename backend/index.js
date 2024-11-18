const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/', (req,res) => {
    res.send('<div><h1>OOpsie</h1></div>');
});
let globaldata = [];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/json', (req, res) => {
    const { imie, nazwisko, haslo, cosTam, plec } = req.body;
    globaldata.push(req.body);
    console.log("imie:", imie, "nazwisko:", nazwisko, "haslo:", haslo, "cosTam:", cosTam, "plec:", plec);
    res.json({ message: {imie, nazwisko, haslo, cosTam, plec} });
});

app.get('/json/data', (req,res) => {
    res.json(globaldata);
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