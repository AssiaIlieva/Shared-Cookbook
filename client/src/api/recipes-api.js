import requester from './requester';

const BASE_URL = 'http://localhost:3030/data/recipes';

export const create = (recipeData) => requester.post(`${BASE_URL}`, recipeData);

const recipesAPI = {
  create,
};

export default recipesAPI;
