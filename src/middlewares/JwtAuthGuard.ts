import { NextApiRequest, NextApiResponse } from 'next';
import { createMiddlewareDecorator, HttpException, NextFunction } from 'next-api-decorators';
import { AuthService } from '@src/services';

export const JwtAuthGuard = createMiddlewareDecorator(
    async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
        const jwt = req.headers.authorization?.replace('Bearer ', '');
        if (!jwt) throw new HttpException(401, 'AUTH_INVALID', ['Access token missing or invalid']);

        const isValid = await AuthService.verifyToken(jwt);
        if (isValid) next();
    },
);
