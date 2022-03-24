
import React, {Component} from 'react';
import './App.css';
import task from './ejemplos/datos.json';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


//import componentes
import Tasks from './componentes/Tasks';
import TaskForm from './componentes/TaskForm';
import Posts from './componentes/Posts'

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

    deleteTask = (id) =>{
        const newTask= this.state.tareas.filter(task => task.id !== id);
        console.log(newTask);
        this.setState({
            tareas:newTask
        })
    }

    checkDone = (id) =>{
        const newtask = this.state.tareas.map(task => {
                                                    if(task.id === id){
                                                        task.done= !task.done;
                                                    }
                                                    return task;
                                                })
        this.setState({tareas:newtask})

    }
    render(){
        return(
            <div>
                <TaskForm addTask={this.addTask}/>
                <Tasks  
                    task={this.state.tareas} 
                    deleteTask={this.deleteTask} 
                    checkDone={this.checkDone} 
                />
                <Posts/>  
             </div> 
            
        )
    }
}



export default App;
