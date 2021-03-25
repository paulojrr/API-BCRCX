import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  const { name, password } = request.body;

  const userService = new CreateUserService();

  const user = await userService.execute({ name, password });

  return response.json(user);
});

export default userRouter;
