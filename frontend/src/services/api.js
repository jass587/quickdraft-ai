import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

export const rewriteEmail = async (email, tone) => {
  try {
    const response = await api.post('/rewrite', {
      email,
      tone,
    });

    return response.data;
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      throw new Error('The request took too long. Please try again.', {
        cause: error,
      });
    }

    if (!error.response) {
      throw new Error(
        'Unable to connect to the server. Please check your connection and try again.',
        { cause: error }
      );
    }

    const message =
      error.response.data?.detail ||
      'Unable to rewrite your email. Please try again.';

    throw new Error(message, { cause: error });
  }
};

export default api;
