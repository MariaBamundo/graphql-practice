import{ gql } from 'apollo-boost';

export const GET_TASKS = gql`
    query{
        tasks{
            name
            checked
        }
    }
`;