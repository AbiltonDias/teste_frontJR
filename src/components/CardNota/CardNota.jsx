import React from 'react';
import './estilo.css';
import { ReactComponent as ImgDelete} from '../../assets/img/delete.svg'

class CardNota extends React.Component {

  apagar(){
    const index = this.props.indice;
    this.props.apagarNota(index);
  }
  
  render() { 
    return ( 
      <section className='card-nota'>
        <header className='card-nota_cabecalho'>
          <h3 className='card-nota_titulo'>{this.props.titulo}</h3>
        </header>
        <p className='card-nota_texto'>{this.props.texto}</p>
        <ImgDelete onClick={this.apagar.bind(this)}/>
      </section>
    )
  }
}
 
export default CardNota;