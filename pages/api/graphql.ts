import { ApolloServer } from 'apollo-server-nextjs';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import typeDefs from '@src/graphql/typeDefs';
import resolvers from '@src/graphql/resolvers';

export default new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
}).createHandler();

export const config = {
    api: {
        bodyParser: false,
    },
};
