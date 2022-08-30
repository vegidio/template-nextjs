import { alias, primitive, serializable } from 'serializr';

export default class Auth {
    @serializable(alias('jwt', primitive()))
    jwt: string;

    constructor(jwt: string) {
        this.jwt = jwt;
    }
}
