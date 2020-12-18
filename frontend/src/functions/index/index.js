import React, { Component } from 'react';
import api from '../../services/services';
import deleteTask from '../deleteTask/deleteTask';
import editTask from '../editTask/editTask';
import insertTask from '../insertTask/insertTask';
import { Link } from 'react-router-dom';
import './index.css';

export default class Tasks extends Component{
    
    constructor(props) {
        super(props)
    
        this.state = {
            tasks: []
        }
    }

    componentDidMount(){
        this.loadTasks();
    }

    loadTasks = async () => {
        const response = await api.get('/');
        const {doc} = response.data;
        
        this.setState({ tasks: doc });
        console.log(this.state.tasks)
    }

    render(){
        const { tasks } = this.state;
        return(
            <div className="task-list" id="task-list">
                {this.state.tasks.map( task => (
                    <div key={task._id} className="task-one" id={task._id}>
                            <p>{task.task}</p>
                            <button className="buttonDone" name="done"></button>
                            <button className="buttonDelete" name="delete" onClick={() => deleteTask(task._id)}></button>
                            <button className="buttonEdit" name="edit" onClick={() => editTask(task._id, task.task)}></button>
                    </div>
                ))}
                <button className="buttonAdd" name="add" onClick={insertTask}></button>
            </div>
        )
    }
}