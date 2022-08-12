import { gql } from 'apollo-server-nextjs';

const typeDefs = gql`
    type Query {
        all: [Country!]!
    }

    type Country {
        name: CountryName!
    }

    type CountryName {
        common: String!
        official: String!
        nativeName: [CountryNativeName!]
    }

    type CountryNativeName {
        language: String!
        common: String!
        official: String!
    }
`;

export default typeDefs;
