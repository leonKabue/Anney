/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookedlisting = /* GraphQL */ `
  query GetBookedlisting($id: ID!) {
    getBookedlisting(id: $id) {
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
export const listBookedlistings = /* GraphQL */ `
  query ListBookedlistings(
    $filter: ModelBookedlistingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookedlistings(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const bookedlistingsByUserID = /* GraphQL */ `
  query BookedlistingsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookedlistingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookedlistingsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getListing = /* GraphQL */ `
  query GetListing($id: ID!) {
    getListing(id: $id) {
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
export const listListings = /* GraphQL */ `
  query ListListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const listingsByUserID = /* GraphQL */ `
  query ListingsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listingsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
