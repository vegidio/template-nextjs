import { importPKCS8, importSPKI, jwtVerify, KeyLike, SignJWT } from 'jose';
import to from 'await-to-js';
import { ApiError, Auth } from '@src/models';
import { privateKey, publicKey } from '@src/utils/jwt';

export default class AuthService {
    private static algorithm = 'ES256';
    private static privateSecret?: KeyLike;
    private static publicSecret?: KeyLike;

    static async signIn(username: string, password: string): Promise<Auth> {
        if (username === 'vinicius' && password === 'password!') {
            this.privateSecret ??= await importPKCS8(privateKey, this.algorithm);

            const token = await new SignJWT({ username: 'vinicius' })
                .setProtectedHeader({ alg: this.algorithm })
                .setIssuedAt()
                .setExpirationTime('1h')
                .sign(this.privateSecret);

            return new Auth(token);
        } else {
            throw ApiError.AUTH_FAILED;
        }
    }

    static async verifyToken(token: string): Promise<boolean> {
        this.publicSecret ??= await importSPKI(publicKey, this.algorithm);
        const [error, result] = await to(jwtVerify(token, this.publicSecret));

        switch ((<any>error)?.code) {
            case 'ERR_JWT_EXPIRED':
                throw ApiError.AUTH_TOKEN_EXPIRED;
        }

        return result?.payload !== undefined;
    }
}
