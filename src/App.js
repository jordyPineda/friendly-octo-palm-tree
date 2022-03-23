
import React, {Component} from 'react';
import './App.css';
import task from './ejemplos/datos.json';

//import componentes
import Tasks from './componentes/Tasks';
import TaskForm from './componentes/TaskForm';


class App extends Component {

    state={
        tareas:task
    }

    addTask = (title, description) => {
        console.log("adding a new task "+ title + " .. "+ description)
        const newTask= {
            title:title,
            descripcion: description,
            id: this.state.tareas.length
        }
        this.setState({
            tareas:[...this.state.tareas , newTask]
        })

    }
    render(){
        return(
            <div>
                <TaskForm addTask={this.addTask}/>
                <Tasks  task={this.state.tareas}/>
            </div>
        )
    }
}


export default App;
