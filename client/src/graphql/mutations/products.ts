import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $title: String!
    $categoryIds: [ID!]!
    $description: String!
    $price: Float!
    $rent: Float!
    $rentOption: RentOption!
    $sellerId: ID!
  ) {
    createProduct(
      title: $title
      categoryIds: $categoryIds
      description: $description
      price: $price
      rent: $rent
      rentOption: $rentOption
      sellerId: $sellerId
    ) {
      success
      message
      data {
        id
        title
        categories {
          id
          name
        }
        price
        rent
        rentOption
        seller {
          id
          name
          email
          phone
          address
        }
      }
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($deleteProductId: ID!) {
    deleteProduct(id: $deleteProductId) {
      success
      message
      data {
        id
        title
        categories {
          id
          name
        }
        description
        price
        rent
        rentOption
        seller {
          id
          name
          email
          phone
          address
        }
      }
    }
  }
`;
