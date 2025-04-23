const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Bem vindo");
})

app.get("/consu/", function(req, res){
    var cpf = req.query["cpf"];

    if (cpf){res.send("retorno consulta: cpf = "+ cpf);
    }else{
        res.send("CPF N FORNECIDO")
    }
})

app.get("/prod", function(req, res){
    res.send("<h1>Lista de produtos!</h1>");
})

app.get("/consu/:parametro", function(req, res){
    res.send("retorno consulta: "+ req.params.parametro);
})


app.listen(5000, function(erro){
    if (erro){
        console.log("Erro ao iniciar.");
    }else{
        console.log("Server iniciado.");
    }
})