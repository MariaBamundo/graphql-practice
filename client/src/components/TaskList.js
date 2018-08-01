import React from 'react';
//import Checkbox from './Checkbox';
//import gql from 'graphql-tag';
//import { graphql } from 'react-apollo';
//import { COMPLETE_TASK } from '../mutations';
import { DELETE_TASK } from '../mutations';

// Create a todo list react component to display list of tasks
class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        }
        
    }
    handleClick(){
        console.log("delete");
    }
    render() {

        return (

            <ul className="tasks">
                {
                    this.props.items.map(item => {
                        //if checkbox is checked set isDone to true
                        return <li key={item.id}>
                        <input type="checkbox"></input>
                         {item.name}
                         <button onClick={this.handleClick}>
                            {'x'}
                        </button>
                        </li>
                    })

                }
            </ul>

        );
    }
}
export default TaskList;
