import requester from './requester';

const BASE_URL = `${import.meta.env.VITE_BASE_URL}/data/comments`;

export const getAll = async (recipeId) => {
  const query = new URLSearchParams({
    where: `recipeId="${recipeId}"`,
    load: 'author=_ownerId:users',
  });

  const result = await requester.get(`${BASE_URL}?${query}`);

  return result;
};

export const create = async (recipeId, text) => {
  const newComment = await requester.post(BASE_URL, { recipeId, text });

  return newComment;
};

export const getAllByRecipe = async (recipeId) => {
  const query = new URLSearchParams({
    where: `recipeId="${recipeId}"`,
  });
  const allComments = await requester.get(`${BASE_URL}?${query}`);
  return allComments;
};

export const remove = async (commentId) => await requester.del(`${BASE_URL}/${commentId}`);

const commentsAPI = {
  create,
  getAll,
  getAllByRecipe,
  remove,
};

export default commentsAPI;
