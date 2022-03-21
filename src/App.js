
import React, {Component} from 'react';
import './App.css';
import task from './ejemplos/datos.json';
import Tasks from './componentes/Tasks';


class App extends Component {

    state={
        tareas:task
    }
    render(){
        return(
            <div>
               <Tasks  task={this.state.tareas}/>
            </div>
        )
    }
}


export default App;
