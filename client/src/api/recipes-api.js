import requester from './requester';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const RECIPES_URL = `${BASE_URL}/data/recipes`;

export const create = (recipeData) => requester.post(`${RECIPES_URL}`, recipeData);

export const getAll = async () => {
  const result = await requester.get(RECIPES_URL);
  const recipes = Object.values(result);
  return recipes;
};

export const getOne = (recipeId) => requester.get(`${RECIPES_URL}/${recipeId}`);

export const remove = (recipeId) => requester.del(`${RECIPES_URL}/${recipeId}`);

export const edit = async (recipeId, recipeData) => {
  const result = await requester.put(`${RECIPES_URL}/${recipeId}`, recipeData);

  return result;
};

export const getLast3Recipes = async () => {
  const result = await requester.get(`${RECIPES_URL}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
  const latestRecipes = Object.values(result);

  return latestRecipes;
};

export const searchRecipes = async (recipeType) => {
  const result = await requester.get(`${RECIPES_URL}?where=recipeType%3D%22${recipeType}%22`);
  const serchedRecipes = Object.values(result);
  return serchedRecipes;
};

const recipesAPI = {
  create,
  getAll,
  getOne,
  remove,
  edit,
  getLast3Recipes,
  searchRecipes,
};

export default recipesAPI;
