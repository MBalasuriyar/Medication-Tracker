const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Patient {
    _id: ID!
    name: String!
  }

  type Medication {
    _id: ID!
    Drug_A
    Drug_B
    Drug_C
  }

  type Query {
    XXXX: [XXXX]
   _____s(_id: String): [Medication]
  }

  type Mutation {
    create____(XXXX1: String!, XXXX2: String!):_____
    create(_id: String!, XXXXNum: Int!):_____
  }
`;

module.exports = typeDefs;
