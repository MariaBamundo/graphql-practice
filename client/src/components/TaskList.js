import React from 'react';
//import gql from 'graphql-tag';
//import { graphql } from 'react-apollo';
//import { COMPLETE_TASK } from '../mutations';

// Create a todo list react component to display list of tasks
class TaskList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: props.items
        }
    }
    render() {
       
        return (
            <ul className="tasks">
            {
                this.state.items.filter(task => !task.isDone).map(item => {
                        return <li key={item.id}> {item.name} </li>
                })
            }
            </ul>
        );
    }
}
export default TaskList;
