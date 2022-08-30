import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError } from '@src/models';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const error = ApiError.fromB64(req.query.type as string);
    res.status(error.status).json(error);
};

export default handler;
