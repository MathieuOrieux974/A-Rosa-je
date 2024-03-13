import axios from 'axios';

/** The configured Axios instance. */
export const GeocodeClient = axios.create({
  baseURL: import.meta.env.VITE_API_GEOCODING_URL,
  params: {
    apiKey: import.meta.env.VITE_API_GEOCODING_KEY
  }
});
