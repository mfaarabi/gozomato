const ROOT_URL = 'https://developers.zomato.com/api/v2.1';

export const getCities = city =>
  fetch(`${ROOT_URL}/cities?q=${city}`, {
    headers: { 'user-key': process.env.REACT_APP_ZOMATO_API_KEY }
  }).then(res => res.json());

export const searchRestaurants = cityEntityId =>
  fetch(`${ROOT_URL}/search?entity_id=${cityEntityId}&entity_type=city`, {
    headers: { 'user-key': process.env.REACT_APP_ZOMATO_API_KEY }
  }).then(res => res.json());
