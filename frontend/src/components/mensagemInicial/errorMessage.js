import React, { Component } from 'react';
import './errorMessage.css';

export default class Message extends Component{

    mostraMensagem(){

        function poucosCaracteres(){
            if(localStorage.getItem('poucosCaracteres')){
            
                const divCriada = document.createElement("div");
                divCriada.setAttribute("class", "erroCaracteres")

                const paragrafoCriado = document.createElement("p");
                paragrafoCriado.setAttribute("id", "paragrafoCriado")

                divCriada.appendChild(paragrafoCriado);
    
                const textoCriado = document.createTextNode("A task deve ter mais que 3 caracteres!")
                
                paragrafoCriado.appendChild(textoCriado);
    
                setTimeout(() => {
                    document.getElementById("mensagem").appendChild(divCriada);
                } , 0)
    
                setTimeout(() => {
                    document.getElementById("mensagem").remove();
                }, 3000)
                localStorage.removeItem('poucosCaracteres');
            }    
        }

        function muitosCaracteres(){
            if(localStorage.getItem('muitosCaracteres')){
                
                const divCriada = document.createElement("div");
                divCriada.setAttribute("class", "erroCaracteres")

                const paragrafoCriado = document.createElement("p");
                paragrafoCriado.setAttribute("id", "paragrafoCriado")

                divCriada.appendChild(paragrafoCriado);
    
                const textoCriado = document.createTextNode("A task deve ter menos que 40 caracteres!")
                
                paragrafoCriado.appendChild(textoCriado);
    
                setTimeout(() => {
                    document.getElementById("mensagem").appendChild(divCriada);
                } , 0)
    
                setTimeout(() => {
                    document.getElementById("mensagem").remove();
                }, 3000)
                localStorage.removeItem('muitosCaracteres');
            }   
        }

        function sucesso(){
            if(localStorage.getItem("sucesso")){

                const divCriada = document.createElement("div");
                divCriada.setAttribute("class", "sucesso")

                const paragrafoCriado = document.createElement("p");
                paragrafoCriado.setAttribute("id", "paragrafoCriado")

                divCriada.appendChild(paragrafoCriado);
    
                const textoCriado = document.createTextNode("A task foi criada com sucesso!")
                
                paragrafoCriado.appendChild(textoCriado);
    
                setTimeout(() => {
                    document.getElementById("mensagem").appendChild(divCriada);
                } , 0)
    
                setTimeout(() => {
                    document.getElementById("mensagem").remove();
                }, 3000)
                localStorage.removeItem('sucesso');
            }
        }

        poucosCaracteres();
        muitosCaracteres();
        sucesso();
    }

    render(){
        return(
            <div id="mensagem">
                {this.mostraMensagem()}
            </div>
        );
    }
};