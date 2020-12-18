import React, { Component } from 'react';
import api from '../../services/services';
import {inputAddIsCreated, inputEditIsCreated, inputAddWasCreated, inputEditWasCreated} from '../controlVariables/controlVariables';

function editTask(id, placeholder){
        
    if(inputEditIsCreated == false && inputAddIsCreated == false){
        inputEditWasCreated();
        criaElementos();
    }

    function editaTask(){

        const conteudoTask = document.getElementById("inputEditCreated").value
        
        if(conteudoTask.length <= 3){
            window.location.reload();
            localStorage.setItem('poucosCaracteres', 'null')
        }else if(conteudoTask.length > 40){
            window.location.reload();
            localStorage.setItem('muitosCaracteres', 'null')
        }else{
            api.patch(`http://localhost:3001/${id}`, {
                nome: conteudoTask
            });
            window.location.reload();
        }
    }

    function criaElementos(){
        const inputCreated = document.createElement("input");
        inputCreated.setAttribute("id", 'inputEditCreated')
        inputCreated.setAttribute("placeholder", placeholder)

        const buttonDoneCreated = document.createElement("button");
        buttonDoneCreated.setAttribute("id", 'buttonEditCreated')

        const buttonCancelCreated = document.createElement("button");
        buttonCancelCreated.setAttribute("id", "buttonCancelCreated")

        const divElementsEdit = document.createElement("div");
        divElementsEdit.setAttribute("id", 'divElementsEdit');

        document.getElementById(id).insertAdjacentElement('afterend', divElementsEdit)

        divElementsEdit.appendChild(inputCreated)
        divElementsEdit.appendChild(buttonDoneCreated)
        divElementsEdit.appendChild(buttonCancelCreated)

        document.getElementById('inputEditCreated').focus();
        document.getElementById('buttonEditCreated').addEventListener("click", editaTask);
        document.getElementById('buttonCancelCreated').addEventListener("click", () => {
            window.location.reload();
        });
    }
}

export default editTask;