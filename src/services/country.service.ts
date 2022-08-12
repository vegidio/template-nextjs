import axios from 'axios';

export default class CountryService {
    private static client = axios.create({
        baseURL: 'https://restcountries.com/v3.1',
        timeout: 5000,
    });

    static async getAll(): Promise<unknown[]> {
        const { data } = await this.client.get('/all');
        return data.map((country: any) => this.processCountry(country));
    }

    // region - Private methods
    private static processCountry(country: any): unknown[] {
        const languages = Object.keys(country.name.nativeName ?? {});
        country.name.nativeName = languages.map((lang) => ({
            language: lang,
            common: country.name.nativeName[lang].common,
            official: country.name.nativeName[lang].official,
        }));

        return { ...country, name: country.name };
    }
    // endregion
}
