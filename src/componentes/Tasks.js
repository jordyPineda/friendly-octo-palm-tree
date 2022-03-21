import React,{Component} from "react";

class Tasks extends Component{

    render(){
        return this.props.task.map( e => <p hey={e.id}>
            {e.title} - {e.descripcion} - {e.done} - {e.id}
            <input type='checkbox' />
            <button>
                x
            </button>
        </p>)
    }
}

export  default Tasks;