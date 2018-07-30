import React from 'react';
import './App.css';
import { Query } from 'react-apollo';
import { GET_TASKS } from '../queries';

  // Show all tasks in app
  const App = () => (
    <div className="App">
      <h1> Todo List </h1>
      <Query query={GET_TASKS}>
        {({data, loading, error}) =>{
          if(loading) return <div>Loading</div>;
          console.log(error);
          if(error) return <div>Error</div>;
          console.log(data);
          return(
            <ul>{data.tasks.map(task => <li>{task.name}</li>)}</ul>
          )
        }}
      </Query>
    </div>  
  )


export default App;
