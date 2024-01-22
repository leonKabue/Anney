/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBookedlisting = /* GraphQL */ `
  subscription OnCreateBookedlisting(
    $filter: ModelSubscriptionBookedlistingFilterInput
    $owner: String
  ) {
    onCreateBookedlisting(filter: $filter, owner: $owner) {
      id
      checkinDate
      checkoutDate
      userID
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBookedlisting = /* GraphQL */ `
  subscription OnUpdateBookedlisting(
    $filter: ModelSubscriptionBookedlistingFilterInput
    $owner: String
  ) {
    onUpdateBookedlisting(filter: $filter, owner: $owner) {
      id
      checkinDate
      checkoutDate
      userID
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBookedlisting = /* GraphQL */ `
  subscription OnDeleteBookedlisting(
    $filter: ModelSubscriptionBookedlistingFilterInput
    $owner: String
  ) {
    onDeleteBookedlisting(filter: $filter, owner: $owner) {
      id
      checkinDate
      checkoutDate
      userID
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      userProfile {
        id
        username
        picture
        schoolname
        email
        owner
        createdAt
        updatedAt
        __typename
      }
      postedListings {
        items {
          id
          title
          aboutPlace
          space
          location
          locationInfo
          availableFrom
          availableTo
          features
          monthlyCost
          pictures
          additionalInfo
          userID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      likedListings {
        items {
          id
          title
          aboutPlace
          space
          location
          locationInfo
          availableFrom
          availableTo
          features
          monthlyCost
          pictures
          additionalInfo
          userID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      bookedListings {
        items {
          id
          checkinDate
          checkoutDate
          userID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      userUserProfileId
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      userProfile {
        id
        username
        picture
        schoolname
        email
        owner
        createdAt
        updatedAt
        __typename
      }
      postedListings {
        items {
          id
          title
          aboutPlace
          space
          location
          locationInfo
          availableFrom
          availableTo
          features
          monthlyCost
          pictures
          additionalInfo
          userID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      likedListings {
        items {
          id
          title
          aboutPlace
          space
          location
          locationInfo
          availableFrom
          availableTo
          features
          monthlyCost
          pictures
          additionalInfo
          userID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      bookedListings {
        items {
          id
          checkinDate
          checkoutDate
          userID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      userUserProfileId
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      userProfile {
        id
        username
        picture
        schoolname
        email
        owner
        createdAt
        updatedAt
        __typename
      }
      postedListings {
        items {
          id
          title
          aboutPlace
          space
          location
          locationInfo
          availableFrom
          availableTo
          features
          monthlyCost
          pictures
          additionalInfo
          userID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      likedListings {
        items {
          id
          title
          aboutPlace
          space
          location
          locationInfo
          availableFrom
          availableTo
          features
          monthlyCost
          pictures
          additionalInfo
          userID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      bookedListings {
        items {
          id
          checkinDate
          checkoutDate
          userID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      userUserProfileId
      __typename
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onCreateProfile(filter: $filter, owner: $owner) {
      id
      username
      picture
      schoolname
      email
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onUpdateProfile(filter: $filter, owner: $owner) {
      id
      username
      picture
      schoolname
      email
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onDeleteProfile(filter: $filter, owner: $owner) {
      id
      username
      picture
      schoolname
      email
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateListing = /* GraphQL */ `
  subscription OnCreateListing(
    $filter: ModelSubscriptionListingFilterInput
    $owner: String
  ) {
    onCreateListing(filter: $filter, owner: $owner) {
      id
      title
      aboutPlace
      space
      location
      locationInfo
      availableFrom
      availableTo
      features
      monthlyCost
      pictures
      additionalInfo
      userID
      owner
      createdAt
      updatedAt
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
      title
      aboutPlace
      space
      location
      locationInfo
      availableFrom
      availableTo
      features
      monthlyCost
      pictures
      additionalInfo
      userID
      owner
      createdAt
      updatedAt
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
      title
      aboutPlace
      space
      location
      locationInfo
      availableFrom
      availableTo
      features
      monthlyCost
      pictures
      additionalInfo
      userID
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
