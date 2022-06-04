const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.static('public'));


// Middleware 
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req,res,next) => {
    res.render('index');
});

app.get('/galeria', (req,res,next) => {
    res.render('galeria');
});

app.get('/utazas', (req,res,next) => {
    res.render('utazas');
});

app.get('/spanyolorszag', (req,res,next) => {
    res.render('spanyolorszag');
});

app.get('/gorogorszag', (req,res,next) => {
    res.render('gorogorszag');
});

app.get('/hollandia', (req,res,next) => {
    res.render('hollandia');
});

app.get('/horvatorszag', (req,res,next) => {
    res.render('horvatorszag');
});

app.get('/india', (req,res,next) => {
    res.render('india');
});

app.get('/japan', (req,res,next) => {
    res.render('japan');
});

app.get('/korzika', (req,res,next) => {
    res.render('korzika');
});

app.get('/olaszorszag', (req,res,next) => {
    res.render('olaszorszag');
});

app.get('/svedorszag', (req,res,next) => {
    res.render('svedorszag');
});

app.get('/tibet', (req,res,next) => {
    res.render('tibet');
});

app.get('/celallomas', (req,res,next) => {
    res.render('celallomas');
});

app.get('/indulas', (req,res,next) => {
    res.render('indulas');
});

app.get('/arak', (req,res,next) => {
    res.render('arak');
});


app.get('/proba', (req,res,next) => {
    res.render('proba');
});

app.get('/teszt', (req,res,next) => {
    res.render('teszt');
});

// Adatbázis csatlakozás
const mongooseURI = 'mongodb+srv://VarroAgnes:abcd1234AS@cluster0.n2cvv.mongodb.net/iroda?retryWrites=true&w=majority';
mongoose.connect(mongooseURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) =>  console.log("Sikeres adatbázis csatlakozás!"))
.catch((err) => console.log(err));




























app.listen(5000, () => {
    console.log(`A szerver fut a következő porton http://localhost:5000`);
});