import { Router } from 'express';

import bookRouter from "./book.routes";

const routes = Router();

routes.use('/books', bookRouter);

export default routes;
