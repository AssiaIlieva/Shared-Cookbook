import recipesAPI from '../api/recipes-api';

export function useCreateRecipe() {
  const recipeCreateHandler = (recipeData) => recipesAPI.create(recipeData);

  return recipeCreateHandler;
}
