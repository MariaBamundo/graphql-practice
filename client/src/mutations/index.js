import gql from "graphql-tag";


export const ADD_TASK = gql`
  mutation addTask($id: String!){
    newTask(name: String ){
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

