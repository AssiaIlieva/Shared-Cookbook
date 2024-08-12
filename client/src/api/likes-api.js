import requester from './requester';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const LIKES_URL = `${BASE_URL}/data/likes`;

export const likeCreate = async (likeData) => requester.post(LIKES_URL, likeData);

export const getLikesForTip = async (tipId) => {
  const result = await requester.get(`${LIKES_URL}?where=tipId%3D%22${tipId}%22&count`);
  return result;
};

export const userHasLiked = async (tipId, userId) => {
  const result = await requester.get(`${LIKES_URL}?where=tipId%3D%22${tipId}%22%20AND%20_ownerId%3D%22${userId}%22`);
  return result.length > 0;
};

const likesAPI = {
  likeCreate,
  getLikesForTip,
  userHasLiked,
};

export default likesAPI;
