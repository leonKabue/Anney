/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBookedlisting = /* GraphQL */ `
  mutation CreateBookedlisting(
    $input: CreateBookedlistingInput!
    $condition: ModelBookedlistingConditionInput
  ) {
    createBookedlisting(input: $input, condition: $condition) {
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
export const updateBookedlisting = /* GraphQL */ `
  mutation UpdateBookedlisting(
    $input: UpdateBookedlistingInput!
    $condition: ModelBookedlistingConditionInput
  ) {
    updateBookedlisting(input: $input, condition: $condition) {
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
export const deleteBookedlisting = /* GraphQL */ `
  mutation DeleteBookedlisting(
    $input: DeleteBookedlistingInput!
    $condition: ModelBookedlistingConditionInput
  ) {
    deleteBookedlisting(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createListing = /* GraphQL */ `
  mutation CreateListing(
    $input: CreateListingInput!
    $condition: ModelListingConditionInput
  ) {
    createListing(input: $input, condition: $condition) {
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
export const updateListing = /* GraphQL */ `
  mutation UpdateListing(
    $input: UpdateListingInput!
    $condition: ModelListingConditionInput
  ) {
    updateListing(input: $input, condition: $condition) {
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
export const deleteListing = /* GraphQL */ `
  mutation DeleteListing(
    $input: DeleteListingInput!
    $condition: ModelListingConditionInput
  ) {
    deleteListing(input: $input, condition: $condition) {
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
