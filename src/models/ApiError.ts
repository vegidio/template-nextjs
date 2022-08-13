import { alias, primitive, serializable } from 'serializr';

/**
 * https://www.rfc-editor.org/rfc/rfc7807
 */
export default class ApiError {
    @serializable(alias('type', primitive()))
    type: string;

    @serializable(alias('status', primitive()))
    status: number;

    @serializable(alias('title', primitive()))
    title?: string;

    @serializable(alias('detail', primitive()))
    detail?: string;

    @serializable(alias('instance', primitive()))
    instance?: string;

    constructor(type: string, status: number, init?: Partial<ApiError>) {
        this.type = type;
        this.status = status;
        Object.assign(this, init);
    }
}
