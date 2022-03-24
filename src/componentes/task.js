import React,{Component} from "react";
import PropTypes from 'prop-types';

class Task extends Component{
    
    
    StyleCompleted(){

        return {
            FontSize: '20px',
            color: this.props.task.done ? 'gray': 'black' , //interesante forma de condicional
            textDecoration: this.props.task.done ? 'line-through':'none'
        }

    }
    
    render(){

        //tener en cuenta
        const {task} = this.props;
        return <div style={this.StyleCompleted()} >

                    {this.props.task.title} -
                    {this.props.task.descripcion} - 
                    {this.props.task.done} - 
                    {this.props.task.id}
                    <input type='checkbox'    onChange={this.props.checkDone.bind(this,task.id)} />
                    <button style={btnDelete} onClick={this.props.deleteTask.bind(this,task.id)}>
                        x
                    </button>
            
                </div>
        
    }
}

Task.proptype = {
    task : PropTypes.object.isRequired
}

const btnDelete = {
    FontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;