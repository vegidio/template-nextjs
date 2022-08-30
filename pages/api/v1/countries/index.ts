import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'serializr';
import { CountryService } from 'src/services';
import { ApiError } from 'src/models';

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
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method;

    switch (method) {
        case 'GET': {
            const response = await CountryService.getAll();
            res.json(response);
            break;
        }

        default:
            const error = ApiError.METHOD_NOT_ALLOWED;
            res.status(error.status).json(serialize(error));
    }
};

export default handler;
