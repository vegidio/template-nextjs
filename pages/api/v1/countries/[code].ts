import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'serializr';
import { CountryService } from 'src/services';
import { ApiError } from 'src/models';

/**
 * @openapi
 * /api/v1/countries/{code}:
 *   get:
 *     tags:
 *       - country
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
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Country'
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method;

    switch (method) {
        case 'GET':
            const code = <string>req.query.code;
            const response = await CountryService.getCountryByCode(code);
            res.status(200).json(response);
            break;

        default:
            const error = new ApiError('METHOD_NOT_ALLOWED', 405);
            res.status(405).json(serialize(error));
    }
};

export default handler;
