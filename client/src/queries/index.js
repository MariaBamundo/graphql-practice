import{ gql } from 'apollo-boost';

export const GET_TASKS = gql`
    query {
        tasks{
            id
            name
            isDone
        }
    }
`;
