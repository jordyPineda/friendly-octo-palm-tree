import React, {Component} from "react";

export default class TaskForm extends Component{

    state = {
        title: '',
        description:''

    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.title, this.state.description);
    }

    onChange = e => {
        this.setState({    
            [e.target.name] : e.target.value
        })
    }
    render(){
       
        return(   
            <form onSubmit={this.onSubmit} >
                <input 
                    type="text" 
                    name="title"
                    placeholder="White a task" 
                    onChange={this.onChange} 
                    value={this.state.title} />

                <br/>
                <br/>
                <textarea 
                    placeholder="White a description of task" 
                    name="description"
                    onChange={this.onChange}  
                    value={this.state.description}/>
                <input type="submit"/>
            </form>
        )

    }

}






