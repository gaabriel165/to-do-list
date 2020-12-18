import React, { Component } from 'react';
import api from '../../services/services';
import {inputAddIsCreated, inputEditIsCreated, inputAddWasCreated, inputEditWasCreated} from '../controlVariables/controlVariables';

function insertTask(){

    if(inputAddIsCreated == false && inputEditIsCreated == false){
        inputAddWasCreated();
        criaElementos();
    }

    function adicionaTask() {
        const conteudoTask = document.getElementById("inputAddCreated").value

        if(conteudoTask.length <= 3){
            window.location.reload();
            localStorage.setItem('poucosCaracteres', 'null')
        }else if(conteudoTask.length > 40){
            window.location.reload();
            localStorage.setItem('muitosCaracteres', 'null')
        }else{
            api.post('http://localhost:3001/', {
                nome: conteudoTask
            });
            window.location.reload();
            localStorage.setItem('sucesso', 'null')
        }
    }

    function criaElementos(){
        const taskList = document.getElementById("task-list")

        const inputCreated = document.createElement("input")
        inputCreated.setAttribute("id", "inputAddCreated");
        inputCreated.setAttribute("placeholder", "Digite a task");

        const buttonAddCreated = document.createElement("button")
        buttonAddCreated.setAttribute("id", 'buttonAddCreated')

        const buttonCancelCreated = document.createElement("button")
        buttonCancelCreated.setAttribute("id", 'buttonCancelCreated2')

        taskList.appendChild(inputCreated)
        taskList.appendChild(buttonAddCreated)
        taskList.appendChild(buttonCancelCreated)
        
        document.getElementById('inputAddCreated').focus();
        document.getElementById('buttonAddCreated').addEventListener("click", adicionaTask);
        document.getElementById('buttonCancelCreated2').addEventListener("click", () => {
            window.location.reload();
        });
    }
}

export default insertTask;