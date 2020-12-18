const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const taskbd = require("./bd");

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    taskbd.find().lean().then(function (doc) {
        res.send({ doc });
    });
})

app.post('/', (req, res) => {
    new taskbd({
        task: req.body.nome
    }).save().then(() => {
        res.redirect("/");
    }).catch((err) => {
        console.log("Erro ao registrar usuario: " + err);
    });
});

app.delete('/:id', (req, res) => {
    taskbd.findOneAndDelete({_id: req.params.id}).exec();
})

app.patch("/:id", (req, res) => {
    taskbd.findOneAndUpdate({_id: req.params.id}, {task: req.body.nome}).then(() => {
        res.end();
    });
});


app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
})