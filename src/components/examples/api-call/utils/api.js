import axios from 'axios';

const ROOT_URL = 'https://developers.zomato.com/api/v2.1';

export const getCities = city =>
  axios.get(`${ROOT_URL}/cities?q=${city}`, {
    headers: { 'user-key': process.env.REACT_APP_ZOMATO_API_KEY }
  });

export const searchRestaurants = cityEntityId =>
  axios.get(`${ROOT_URL}/search?entity_id=${cityEntityId}&entity_type=city`, {
    headers: { 'user-key': process.env.REACT_APP_ZOMATO_API_KEY }
  });
