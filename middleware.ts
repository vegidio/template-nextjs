import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import to from 'await-to-js';
import { AuthService } from '@src/services';
import { ApiError } from '@src/models';

export const middleware = async (req: NextRequest) => {
    let token = req.headers.get('Authorization')?.replace('Bearer ', '');

    if (token) {
        const [error] = await to(AuthService.verifyToken(token));
        if (error) {
            const b64 = btoa(JSON.stringify(error));
            return NextResponse.rewrite(new URL(`/api/error?type=${b64}`, req.url));
        }

        NextResponse.next();
    } else {
        const b64 = btoa(JSON.stringify(ApiError.AUTH_INVALID));
        return NextResponse.rewrite(new URL(`/api/error?type=${b64}`, req.url));
    }
};

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/coco',
};
