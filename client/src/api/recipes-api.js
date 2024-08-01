import requester from './requester';

const BASE_URL = 'http://localhost:3030/data/recipes';

export const create = (recipeData) => requester.post(`${BASE_URL}`, recipeData);

export const getAll = async () => {
  const result = await requester.get(BASE_URL);
  const recipes = Object.values(result);
  console.log(recipes);
  return recipes;
};

export const getOne = (recipeId) => requester.get(`${BASE_URL}/${recipeId}`);

const recipesAPI = {
  create,
  getAll,
  getOne,
};

export default recipesAPI;
