import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Recipe from '../models/Recipe';
import User from '../models/User';

interface Request {
  title: string;
  description: string;
  user_id: string;
  tag: string;
}

class CreateRecipeService {
  public async execute({
    title,
    description,
    user_id,
    tag,
  }: Request): Promise<Recipe> {
    const userRepository = getRepository(User);
    const recipeRepository = getRepository(Recipe);

    if (!title || !description || !user_id || !tag) {
      throw new AppError('Title, description, user_id, tag are required');
    }

    const checkUserExists = await userRepository.findOne(user_id);

    if (!checkUserExists) {
      throw new AppError('Please set a valid user', 401);
    }

    const recipe = recipeRepository.create({
      title,
      description,
      user_id,
      tag,
    });

    recipeRepository.merge;
    await recipeRepository.save(recipe);

    return recipe;
  }
}

export default CreateRecipeService;
