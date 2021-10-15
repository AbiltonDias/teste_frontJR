import React, { Component } from 'react';
import ListaNotas from './components/ListaNotas/ListaNotas';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto){
    const novoEstado = {
      notas: [...this.state.notas, { titulo, texto }]
    }
    this.setState(novoEstado);
  }

  deletarNota(index){
    const estadoAtual = this.state.notas;
    estadoAtual.splice(index,1);
    this.setState({notas: estadoAtual})
  }

  render(){
    return (
      <>
        <section className="conteudo">
          <FormularioCadastro criarNota={this.criarNota.bind(this)} />
          <ListaNotas notas={this.state.notas}  apagarNota={this.deletarNota.bind(this)}/>    
        </section>
      </>
    );
  }
}

export default App;
