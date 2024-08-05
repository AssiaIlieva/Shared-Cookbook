import requester from './requester';

const BASE_URL = 'http://localhost:3030/data/tips';

export const create = (tipData) => requester.post(`${BASE_URL}`, tipData);

export const getAll = async () => {
  const result = await requester.get(BASE_URL);
  const tips = Object.values(result);
  return tips;
};

export const getOne = (tipId) => requester.get(`${BASE_URL}/${tipId}`);

export const remove = (tipId) => requester.del(`${BASE_URL}/${tipId}`);

export const edit = async (tipId, tipData) => {
  const result = await requester.put(`${BASE_URL}/${tipId}`, tipData);

  return result;
};

export const getLast3Tips = async () => {
  const result = await requester.get(`${BASE_URL}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
  const latestTips = Object.values(result);

  return latestTips;
};

const tipsAPI = {
  create,
  getAll,
  getOne,
  remove,
  edit,
  getLast3Tips,
};

export default tipsAPI;
