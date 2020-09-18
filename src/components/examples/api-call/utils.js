export const parseCitySuggestions = data =>
  data.location_suggestions.map(e => {
    const { id, name } = e;
    return { id, name };
  });

export const parseSearchRestaurants = data =>
  data.restaurants.map(e => {
    const {
      id,
      name,
      thumb: picture,
      cuisines,
      price_range: priceRange,
      user_rating: { aggregate_rating: rating }
    } = e.restaurant;
    return { id, name, picture, cuisines, priceRange, rating };
  });
