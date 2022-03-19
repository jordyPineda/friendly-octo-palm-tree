
import React from 'react';
import './App.css';


//escritura en funcion
/* function HelloWord(props){
  return(
    <div id='hello'>
      <h3>
        {props.titulo}
      </h3>
      <h4>
        {props.texto}
      </h4>
    </div>
  )
} */

class HelloWord extends React.Component{
   render () {
        return (
          <div id='hello'>
            <h3>
              {this.props.titulo}
            </h3>
            <h4>
              {this.props.texto}
            </h4>
          </div>
        )
    }
  }


function App() {
  return (
    <div>
        Pagina: Componente central
        <HelloWord  texto="1 texto"  titulo="1 Comp"/> 
         <HelloWord  texto="2 texto"  titulo="2 Comp"/>
    </div>
  );
}

//otros ejemplos para la funcion App
// const App = () => <div>Primer componente : <HelloWord/> </div>


export default App;
