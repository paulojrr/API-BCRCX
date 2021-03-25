import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Recipe from '../models/Recipe';

interface Request {
  id: string;
  title?: string;
  description?: string;
  tag?: string;
}

class AlterRecipeService {
  public async execute({
    id,
    title,
    description,
    tag,
  }: Request): Promise<Recipe> {
    const recipeRepository = getRepository(Recipe);

    let checkRecipeExists = await recipeRepository.findOne(id);

    if (!checkRecipeExists) {
      throw new AppError('Recipe does not exists');
    }

    checkRecipeExists.title = title!;
    checkRecipeExists.description = description!;
    checkRecipeExists.tag = tag!;

    recipeRepository.save(checkRecipeExists);

    return checkRecipeExists;
  }
}

export default AlterRecipeService;
