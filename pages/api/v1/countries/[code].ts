import { createHandler, Get, Query } from 'next-api-decorators';
import { JwtAuthGuard } from '@src/middlewares';
import { CountryService } from '@src/services';
import { CountryCodePipe } from '@src/pipes';
import { Country } from '@src/graphql';

/**
 * @openapi
 * /api/v1/countries/{code}:
 *   get:
 *     tags:
 *       - Country
 *     summary: Lists all countries that contain a matching country code.
 *     operationId: getCountriesByCode
 *     parameters:
 *       - name: code
 *         in: path
 *         description: A country code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Country'
 *     security:
 *       - general_auth:
 */
class Handler {
    @Get()
    @JwtAuthGuard()
    findByCode(@Query('code', CountryCodePipe) code: string): Promise<Country[]> {
        return CountryService.findByCode(code);
    }
}

export default createHandler(Handler);
