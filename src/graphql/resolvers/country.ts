import { Country, Resolvers } from 'src/graphql';
import { CountryService } from 'src/services';

const resolvers: Resolvers = {
    Query: {
        all: () => <Promise<Country[]>>CountryService.getAll(),
    },

    // Country: {
    //     name: ({ name }): CountryName => {
    //         const languages = Object.keys(name.nativeName ?? {});
    //         const nativeName = languages.map((lang) => ({
    //             language: lang,
    //             common: name.nativeName[lang].common,
    //             official: name.nativeName[lang].official,
    //         }));
    //
    //         return { ...name, nativeName };
    //     },
    // },
};

export default resolvers;
