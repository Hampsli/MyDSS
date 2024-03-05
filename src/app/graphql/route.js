import { ApolloServer } from '@apollo/server';

import { startServerAndCreateNextHandler } from '@as-integrations/next';

import { gql } from 'graphql-tag';

import allowCors from '../utils/cors';

const account = [
  {
    id: 'r89fdjk23r89yew234fg89h23',

    name: 'Mark Thomas',

    country: 'United States',

    giftCardId: '89dfviuhbbwerdfv897hwedfqdfqwf',

    address: `456 Maple Avenue, Austin, TX 78701`,
  },
];

const rewards = [
  {
    id: '1',

    savingType: 'Voucher',

    description: 'Save $2 at checkout',

    info: [
      {
        valid: '2023',

        code: '89wdfeqwh89fewh98fh',
      },
    ],
  },

  {
    id: '2',

    savingType: 'Voucher',

    description: 'Save 20% at checkout',

    info: [
      {
        valid: '2023',

        code: 'erfgerwgergewgewg345',
      },
    ],
  },

  {
    id: '3',

    savingType: 'Voucher',

    description: 'Save 25% at checkout',

    info: [
      {
        valid: '2023',

        code: '34fg67werf45y45ytg0a',
      },
    ],
  },

  {
    id: '4',

    savingType: 'Voucher',

    description: 'Save 5% at checkout',

    info: [
      {
        valid: '2023',

        code: 'er234dfrgdfsgerwerwge',
      },
    ],
  },

  {
    id: '5',

    savingType: 'Voucher',

    description: 'Save 50% at checkout',

    info: [
      {
        valid: '2023',

        code: 'gerwff4576jhey6233343',
      },
    ],
  },
];

// Define the GraphQL schema and resolvers

const typeDefs = gql`
  type Rewards {
    id: String

    savingType: String

    description: String

    info: [Rewards]
  }

  type Rewards {
    valid: String

    code: String
  }

  type Account {
    id: String

    name: String

    country: String

    giftCardId: String

    address: String
  }

  type Query {
    rewards: [Rewards]

    account: [Account]
  }
`;

const resolvers = {
  Query: {
    rewards: () => rewards,

    account: () => account,
  },
};

// Create the Apollo Server

const server = new ApolloServer({
  typeDefs,

  resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res }),
});

export async function GET(request) {
  return handler(request);
}

export async function POST(request) {
  return handler(request);
}

export default allowCors(handler);