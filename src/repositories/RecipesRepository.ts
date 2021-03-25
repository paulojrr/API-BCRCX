import { EntityRepository, Repository } from 'typeorm';

import AppError from '../errors/AppError';

import Recipe from '../models/Recipe';

@EntityRepository(Recipe)
class RecipesRepository extends Repository<Recipe> {
  public async deleteRecipe(id: string): Promise<void> {
    const checkRecipeExists = await this.findOne(id);

    if (!checkRecipeExists) {
      throw new AppError('Recipe does not exists');
    }

    await this.remove(checkRecipeExists);
  }

  public async findRecipe(id: string): Promise<Recipe | void> {
    const checkRecipeExists = await this.findOne(id);

    if (!checkRecipeExists) {
      throw new AppError('Recipe does not exists');
    }

    return checkRecipeExists;
  }
}

export default RecipesRepository;
