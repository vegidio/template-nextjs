import { ApolloServer } from 'apollo-server-nextjs';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import typeDefs from 'src/graphql/typeDefs';
import resolvers from 'src/graphql/resolvers';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
}).createHandler();
