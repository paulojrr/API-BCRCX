import { Router } from 'express';

import userRouter from './user.routes';
import recipesRouter from './recipes.routes';
import sessionRouter from './sessions.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/recipes', recipesRouter);
routes.use('/sessions', sessionRouter);

export default routes;
