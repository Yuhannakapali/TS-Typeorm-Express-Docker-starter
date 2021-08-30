import express from 'express';
import { v1Router } from './v1/routes';

export const apiRouter = express.Router();

apiRouter.use("v1", v1Router)