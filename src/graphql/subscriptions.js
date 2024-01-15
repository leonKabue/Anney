/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateListing = /* GraphQL */ `
  subscription OnCreateListing(
    $filter: ModelSubscriptionListingFilterInput
    $owner: String
  ) {
    onCreateListing(filter: $filter, owner: $owner) {
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
export const onUpdateListing = /* GraphQL */ `
  subscription OnUpdateListing(
    $filter: ModelSubscriptionListingFilterInput
    $owner: String
  ) {
    onUpdateListing(filter: $filter, owner: $owner) {
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
export const onDeleteListing = /* GraphQL */ `
  subscription OnDeleteListing(
    $filter: ModelSubscriptionListingFilterInput
    $owner: String
  ) {
    onDeleteListing(filter: $filter, owner: $owner) {
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
