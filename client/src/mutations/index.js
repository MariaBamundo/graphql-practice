import gql from "graphql-tag";
import { Mutation } from "react-apollo";

//create your GraphQL mutation, wrap it in gql
export const ADD_TASK = gql`
  mutation AddTask($name: String!){
    addTask(name: $name, isDone: false ){
      id
      name
      isDone
    }
  }
`;

export const COMPLETE_TASK = gql`
mutation markCompleted($id: ID!, $isDone: Boolean) {
    completeTask(id: $id, isDone: $isDone){
        id
        description
        isDone
        createdAt
    }
}
`;


export const DELETE_TASK = gql`
    mutation removeTask($id: String!){
        deleteTask(id:$id){
            id
            item
            isDone
        }
    }`;

