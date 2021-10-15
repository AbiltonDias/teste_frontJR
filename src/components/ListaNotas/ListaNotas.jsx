import React, { Component } from 'react';
import CardNota from '../CardNota/CardNota';
import './estilo.css';

class ListaNotas extends Component {

  render(){
    //const array = ["Trabalho", "Estudo", "Meditação"];
    
    return(
      <>
        <ul className="lista-notas">
          {
            this.props.notas.map((lista,index) =>{
              return(
                <li key={index}  className="lista-notas_conteudo">
                 <CardNota indice={index} titulo={lista.titulo} texto={lista.texto} apagarNota={this.props.apagarNota}/>
                </li>
              )
            })
          }
        
      </ul>
      </>
    )
  }
}

export default ListaNotas;