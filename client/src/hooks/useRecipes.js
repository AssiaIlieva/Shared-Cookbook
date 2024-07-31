import { useEffect, useState } from 'react';

import recipesAPI from '../api/recipes-api';

export function useCreateRecipe() {
  const recipeCreateHandler = (recipeData) => recipesAPI.create(recipeData);

  return recipeCreateHandler;
}

export function useGetAllRecipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await recipesAPI.getAll();
      setRecipes(result);
    })();
  }, []);
  return [recipes, setRecipes];
}
