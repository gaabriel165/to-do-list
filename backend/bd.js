//Configuração banco de dados
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/tasks", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Mongodb conectado!");
}).catch((err) => {
    console.log("Erro ao se conectar no mongodb: " + err);
});

const taskSchema = mongoose.Schema({
    task: {
        type: String,
        require: true
    }
});

const taskbd = mongoose.model("taskbd", taskSchema);

module.exports = taskbd;