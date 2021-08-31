import { logger } from '../../../config/winston.config';
import { Request, Response } from 'express';


export const errorHandler = (err: any, _req: Request, res: Response) => {
    logger.error(`${err.message}`);
    return res.status(err.status || 500).json({
        error: err.message,
    });
}

export const customSuccess = (_req: any, res: any) => {
    return res.customSuccess = function ({ code = 200, message = "", data = {} }) {
        return res.status(code).json({
            code,
            message,
            data,
        })
    }
}