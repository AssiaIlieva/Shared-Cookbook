import requester from './requester';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USERS_URL = `${BASE_URL}/users`;

export const login = (email, password) => requester.post(`${USERS_URL}/login`, { email, password });

export const register = (username, email, password) => requester.post(`${USERS_URL}/register`, { username, email, password });

export const logout = () => requester.get(`${USERS_URL}/logout`);
