import gql from "graphql-tag";

export const getAll = gql`
  {
    students{
      name
      uni
      roll
    }
  }
`;

export const addOne = gql`
    mutation insert_students($name: String!, $roll: Int!, $uni: String!, $course_id:Int!){
        insert_students(
            objects: [
                {
                  name: $name,
                  roll: $roll,
                  uni: $uni,
                  course_id: $course_id
                }
              ]
          ){
            affected_rows
            returning {
              name
            }
          }
    }
`;