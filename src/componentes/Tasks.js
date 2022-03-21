import React,{Component} from "react";
import Task from './Task.js';

class Tasks extends Component{

    render(){
        return this.props.task.map( e => <Task task={e} key={e.id}/>)
    }
}

export  default Tasks;