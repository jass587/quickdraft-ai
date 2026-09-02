import axios from 'axios';
import { getToken } from '../utils/auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const registerUser = async (email, password) => {
  try {
    const response = await api.post('/auth/register', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.detail ||
      'Unable to create your account. Please try again.';

    throw new Error(message, {
      cause: error,
    });
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/auth/login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.detail ||
      'Unable to log in. Please check your credentials and try again.';

    throw new Error(message, {
      cause: error,
    });
  }
};

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

    throw new Error(message, {
      cause: error,
    });
  }
};

export const getUsage = async () => {
  try {
    const response = await api.get('/usage');

    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.detail ||
      'Unable to load your usage information. Please try again.';

    throw new Error(message, {
      cause: error,
    });
  }
};

export default api;
