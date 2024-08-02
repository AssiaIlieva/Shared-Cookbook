import requester from './requester';

const BASE_URL = 'http://localhost:3030/data/comments';

export const getAll = async (recipeId) => {
  const query = new URLSearchParams({
    where: `recipeId="${recipeId}"`,
    load: `owner=_ownerId:users`,
  });

  const result = await requester.get(`${BASE_URL}?${query}`);

  return result;
};

export const create = async (recipeId, text) => {
  const newComment = await requester.post(BASE_URL, { recipeId, text });

  return newComment;
};
