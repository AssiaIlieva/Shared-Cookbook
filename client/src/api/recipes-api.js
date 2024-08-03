import requester from './requester';

const BASE_URL = 'http://localhost:3030/data/recipes';

export const create = (recipeData) => requester.post(`${BASE_URL}`, recipeData);

export const getAll = async () => {
  const result = await requester.get(BASE_URL);
  const recipes = Object.values(result);
  return recipes;
};

export const getOne = (recipeId) => requester.get(`${BASE_URL}/${recipeId}`);

export const remove = (recipeId) => requester.del(`${BASE_URL}/${recipeId}`);

export const edit = async (recipeId, recipeData) => {
  const result = await requester.put(`${BASE_URL}/${recipeId}`, recipeData);

  return result;
};

const recipesAPI = {
  create,
  getAll,
  getOne,
  remove,
  edit,
};

export default recipesAPI;
