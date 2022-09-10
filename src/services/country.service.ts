import { HttpException } from 'next-api-decorators';
import axios from 'axios';
import to from 'await-to-js';
import { Country } from '@src/graphql';

export default class CountryService {
    private static client = axios.create({
        baseURL: 'https://restcountries.com/v3.1',
        timeout: 5000,
    });

    static async findAll(): Promise<Country[]> {
        const { data } = await this.client.get('/all');
        return data.map((country: any) => this.processCountry(country));
    }

    static async findByCode(code: string): Promise<Country> {
        const [error, resp] = await to(this.client.get(`/alpha/${code}`));

        if (error || resp.data.lang <= 0) {
            throw new HttpException(404, 'ERR_NOT_FOUND', ['No country found with this code']);
        } else {
            return this.processCountry(resp.data[0]);
        }
    }

    // region - Private methods
    private static processCountry(country: any): Country {
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
