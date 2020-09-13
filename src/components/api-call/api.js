// TO DO: API Call
const ROOT_URL = 'https://developers.zomato.com/api/v2.1';

export const fetchCities = city => {
  return fetch(`${ROOT_URL}/cities?q=${city}`).then(res => res.json())
}
