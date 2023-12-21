// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1211/api/products', // Replace with your Spring Boot API URL
});

export const addToCartAPI = (item) => api.post('/add-to-cart', item);
export const removeFromCartAPI = (item) => api.post('/remove-from-cart', item);
