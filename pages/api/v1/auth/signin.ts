import { Body, createHandler, Post, ValidationPipe } from 'next-api-decorators';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { AuthService } from '@src/services';
import { Auth } from '@src/models';

class SignInDto {
    @IsEmail()
    email!: string;

    @IsNotEmpty()
    @IsString()
    password!: string;
}

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
 *               email:
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
class Handler {
    @Post()
    signIn(@Body(ValidationPipe) body: SignInDto): Promise<Auth> {
        const { email, password } = body;
        return AuthService.signIn(email, password);
    }
}

export default createHandler(Handler);
