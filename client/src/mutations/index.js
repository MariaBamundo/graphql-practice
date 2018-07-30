import gql from "graphql-tag";

export const ADD_TASK = gql`
  mutation{
    addTask(name: String ){
      id
      name
    }
  }
`;


/*
mutation {
  addTask(name: "laundry"){
    id
  }
}
mutation {
  removeTask(id: "5b5b27f5d1aed1100f2c1db4"){
    id
    name
  }
}
mutation{
  updateTask(id: "5b5b2962d1aed1100f2c1db5" 
    name:"dishes"){
    id
    name
  }
}

checkTask
}
*/