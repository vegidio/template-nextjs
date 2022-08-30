import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'serializr';
import to from 'await-to-js';
import { AuthService } from '@src/services';
import { ApiError, Auth } from '@src/models';

/**
 * @openapi
 * /api/v1/auth/signin:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Authenticate the user
 *     operationId: signIn
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: vinicius
 *               password:
 *                 type: string
 *                 example: password!
 *       required: true
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method;

    switch (method) {
        case 'POST': {
            const { username, password } = req.body;
            const [error, value] = await to<Auth, ApiError>(AuthService.signIn(username, password));

            if (error) {
                res.status(error.status).json(serialize(error));
            } else {
                res.json(serialize(value));
            }

            break;
        }

        default:
            const error = ApiError.METHOD_NOT_ALLOWED;
            res.status(error.status).json(serialize(error));
    }
};

export default handler;
