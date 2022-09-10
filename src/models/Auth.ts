import { alias, primitive, serializable } from 'serializr';

export class Auth {
    @serializable(alias('jwt', primitive()))
    jwt: string;

    constructor(jwt: string) {
        this.jwt = jwt;
    }
}
