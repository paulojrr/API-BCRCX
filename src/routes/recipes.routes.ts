import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';

import Recipe from '../models/Recipe';

import CreateRecipeService from '../services/CreateRecipeService';
import AlterRecipeService from '../services/AlterRecipeService';
import RecipesRepository from '../repositories/RecipesRepository';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const recipesRouter = Router();

recipesRouter.use(ensureAuthenticated);

recipesRouter.post('/', async (request, response) => {
  const { title, description, user_id, tag } = request.body;

  const recipeService = new CreateRecipeService();

  const recipe = await recipeService.execute({
    title,
    description,
    user_id,
    tag,
  });

  return response.json(recipe);
});

recipesRouter.get('/', async (_, response) => {
  const recipeRepository = getRepository(Recipe);

  const recipes = await recipeRepository.find();

  return response.json(recipes);
});

recipesRouter.get('/:id', async (request, response) => {
  const recipeRepository = getCustomRepository(RecipesRepository);

  const recipes = await recipeRepository.findRecipe(request.params.id);

  return response.json(recipes);
});

recipesRouter.delete('/:id', async (request, response) => {
  const recipeRepository = getCustomRepository(RecipesRepository);

  await recipeRepository.deleteRecipe(request.params.id);

  return response.send();
});

recipesRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { title, description, tag } = request.body;

  const alterService = new AlterRecipeService();

  alterService.execute({ id, title, description, tag });

  return response.send();
});

recipesRouter.get('/tags/:tag', async (request, response) => {
  const recipeRepository = getRepository(Recipe);

  const { tag } = request.params;

  const tags = await recipeRepository.find({ where: { tag } });

  return response.json(tags);
});

export default recipesRouter;
