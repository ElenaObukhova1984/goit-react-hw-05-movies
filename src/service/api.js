import axios from "axios";

const API_KEY = 'ee39ca8cad92a8b09ec7ae8a83a29296';
axios.defaults.baseURL = 'https://www.themoviedb.org/3/';

// axios.defaults.params = {

// };


export const getMovie = async () => {
  const { data } = await axios.get(`trending/movie/day?${API_KEY}`);
   
    return data;
    
};

export const getMovieById = async id => {
  const { data } = await axios.get(`movie/${id}?${API_KEY}`);
  return data;
};

export const getCastById = async id => {
  const { data } = await axios.get(`movie/${id}/credits?${API_KEY}`);
  return data;
};

export const getReviewsById = async id => {
  const { data } = await axios.get(`movie/${id}/reviews?${API_KEY}`);
  return data;
};

export const getMoviesByQuery = async query => {
  const { data } = await axios.get(
    `search/movie?${API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`
  );
  return data;
};
