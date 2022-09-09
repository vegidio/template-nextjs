import { createHandler, Get } from 'next-api-decorators';
import { CountryService } from '@src/services';
import { Country } from '@src/graphql';

/**
 * @openapi
 * /api/v1/countries:
 *   get:
 *     tags:
 *       - Country
 *     summary: Lists all countries
 *     operationId: getCountries
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
    findAll(): Promise<Country[]> {
        return CountryService.getAll();
    }
}

export default createHandler(Handler);
