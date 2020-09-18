import * as api from './api';
import * as parser from './parser';

export const getCityDetails = city =>
  api.getCityDetails(city).then(({ data }) => parser.parseCityDetails(data));

export const searchRestaurants = cityEntityId =>
  api
    .searchRestaurants(cityEntityId)
    .then(({ data }) => parser.parseSearchRestaurants(data));
