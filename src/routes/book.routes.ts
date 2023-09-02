import { Router } from 'express';

import BookController from "../controllers/BookController";

const bookRouter = Router();

const bookController = new BookController();

bookRouter.get('/', bookController.index);
bookRouter.get('/:title', bookController.selectByTitle);
bookRouter.post('/', bookController.create);
bookRouter.put('/:id', bookController.update);
bookRouter.delete('/:id', bookController.delete);

export default bookRouter;
