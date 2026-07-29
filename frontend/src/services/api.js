import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

export const rewriteEmail = async (email, tone) => {
  const response = await api.post('/rewrite', {
    email,
    tone,
  });

  return response.data;
};
export default api;
