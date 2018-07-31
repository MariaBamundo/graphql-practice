import React, { Component } from 'react';
import '../index.css';
//import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import TaskList  from "./TaskList";
//import query
import { GET_TASKS } from '../queries';
//import mutation
import { ADD_TASK } from '../mutations';

//create app
class App extends Component {
    constructor(props) {
        super(props)
        this.state = { name: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.name.length) {
            return;
        }
        this.props.addTask({
            variables: {
                name: this.state.name,
                //set to false automatically
                isDone: false
            },
            update: (store, { data: { newTask } }) => {
                
                const data = store.readQuery({ query: GET_TASKS });
               
                data.tasks.push(newTask);
                
                store.writeQuery({ query: GET_TASKS, data });
                this.setState({ name: '' });
            },
        }).then(function handleChange(response) {
            console.log(response);
        });
    }

    render() {
        const loading = this.props.getTasks.loading;
        if (loading){
            return <div> loading </div>;
        }
        return (
            <div className="App">
                <h2>Todo...</h2>
                <div className='taskList'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='input'>
                            <input
                                className="addTask"
                                onChange={this.handleChange}
                                value={this.state.name}
                                placeholder={'Add a task'}
                            />
                        </div>
                    </form>
                    <TaskList items={this.props.getTasks.tasks}/>
                </div>
            </div>
        );
    }
}

export default compose(graphql(GET_TASKS, { name: 'getTasks' }), 
graphql(ADD_TASK, {name: 'addTask'})
) (App);
