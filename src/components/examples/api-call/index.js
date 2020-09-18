import React, { useState, useEffect } from 'react';
import { getCities, searchRestaurants } from './api';
import { parseCitySuggestions, parseSearchRestaurants } from './utils';
import CitySuggestions from './city-suggestions';
import Restaurants from './restaurants';

const ApiCall = () => {
  const cityQuery = 'jakarta';
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const searchRestaurantsFromCity = async () => {
      try {
        const cities = await getCities(cityQuery);
        const parsedCities = parseCitySuggestions(cities.data);
        setCitySuggestions(parsedCities);

        if (parsedCities.length > 0) {
          const restaurants = await searchRestaurants(parsedCities[0].id);
          const parsedRestaurants = parseSearchRestaurants(restaurants.data);
          setRestaurants(parsedRestaurants);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    searchRestaurantsFromCity();
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      <div>
        City suggestions with query {cityQuery} are:
        <div>
          {citySuggestions.map(e => (
            <CitySuggestions key={e.id} data={e} />
          ))}
        </div>
      </div>
      {citySuggestions.length > 0 ? (
        <div>
          Restaurants with city entity id 74 are:
          <div>
            {restaurants.map(e => (
              <Restaurants key={e.id} data={e} />
            ))}
          </div>
        </div>
      ) : (
        <div>No cities found</div>
      )}
    </div>
  );
};

export default ApiCall;
