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

    static fromB64(base64: string): ApiError {
        const obj = JSON.parse(atob(base64));
        return obj as ApiError;
    }

    // region - Errors
    static AUTH_FAILED = new ApiError('AUTH_FAILED', 401); // When the authentication fails
    static AUTH_INVALID = new ApiError('AUTH_INVALID', 401); // When there's no JWT token
    static AUTH_TOKEN_EXPIRED = new ApiError('AUTH_TOKEN_EXPIRED', 401); // When the JWT token expired
    static METHOD_NOT_ALLOWED = new ApiError('METHOD_NOT_ALLOWED', 405); // When the HTTP method is not supported
    // endregion
}
