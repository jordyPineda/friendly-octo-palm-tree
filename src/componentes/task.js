import React,{Component} from "react";


class Task extends Component{
    render(){

        //tener en cuenta
        const {task} = this.props;

        return <div>

                    {this.props.task.title} -
                    {this.props.task.descripcion} - 
                    {this.props.task.done} - 
                    {this.props.task.id}
                    <input type='checkbox' />
                    <button>
                        x
                    </button>
            
                </div>
        
    }
}

export default Task;