import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    getAllCategories {
      success
      message
      data {
        id
        name
      }
    }
  }
`;
