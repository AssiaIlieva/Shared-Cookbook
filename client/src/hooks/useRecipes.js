import { useEffect, useState } from 'react';

import recipesAPI from '../api/recipes-api';

export function useCreateRecipe() {
  const recipeCreateHandler = (recipeData) => recipesAPI.create(recipeData);

  return recipeCreateHandler;
}

export function useGetAllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const result = await recipesAPI.getAll();
        setRecipes(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);
  return { recipes, error, loading };
}

export function useSearchRecipes(recipeType) {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!recipeType) {
      setRecipes([]);
      return;
    }
    const fetchSearchedRecipes = async () => {
      setLoading(true);
      try {
        const result = await recipesAPI.searchRecipes(recipeType);
        setRecipes(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchedRecipes();
  }, [recipeType]);

  return { recipes, error, loading };
}
