import axios from 'axios';

export const budgets = axios.create({
  baseURL: 'http://localhost:3001',
});
