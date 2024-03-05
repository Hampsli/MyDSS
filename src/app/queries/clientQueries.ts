import { gql } from '@apollo/client';

const GET_ACCOUNT = gql`
  query {
    account {
      id
      name
      country
      giftCardId
      address
    }
  }
`;

const GET_REWARDS = gql`
  query {
    rewards {
      id
      savingType
      description
      info {
        valid
        code
      }
    }
  }
`;

export { GET_ACCOUNT, GET_REWARDS };