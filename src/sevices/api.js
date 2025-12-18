
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env?.VITE_API_BASE_URL,
  timeout: 120000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    if (!import.meta.env?.VITE_API_BASE_URL) {
      console.error('VITE_API_BASE_URL environment variable is not configured');
      throw new Error('API configuration error. Please contact support.');
    }

    const token =
      localStorage.getItem('token') ||
      localStorage.getItem('studenttoken') ||
      localStorage.getItem('adminToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    if (typeof response.data === 'string' && response.data.includes('<!doctype html>')) {
      console.error('Received HTML response instead of JSON - API base URL is likely misconfigured');
      const error = new Error('API configuration error. The backend service is not accessible.');
      error.isConfigError = true;
      throw error;
    }

    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('studenttoken');
      localStorage.removeItem('adminToken');
    }

    return Promise.reject(error);
  }
);

export default api;
