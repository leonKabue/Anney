/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getListing = /* GraphQL */ `
  query GetListing($id: ID!) {
    getListing(id: $id) {
      id
      Location
      HouseInfo
      DurationRequired
      Pictures
      Price
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listListings = /* GraphQL */ `
  query ListListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Location
        HouseInfo
        DurationRequired
        Pictures
        Price
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
