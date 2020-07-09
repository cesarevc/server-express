const express = require('express');
const app = express();

require('./config/config');

const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());


app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});

app.post('/usuario', (req, res) => {
    res.send('post usuario');
});

app.post('/usuario', (req, res) => {
    res.send('post usuario');
});
app.post('/usuario', (req, res) => {
    res.send('post usuario');
});


app.listen(process.env.PORT, () => {
    console.log(`servidor escuchando puerto ${process.env.PORT}`)
})