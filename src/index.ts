import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;
const resolvers = {
  Query: {
    hello: () => "world",
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const stratServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
  });
  console.log(`🚀  Server ready at: ${url}`);
};

stratServer();
