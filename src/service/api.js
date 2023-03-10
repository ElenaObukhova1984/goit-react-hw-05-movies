import axios from "axios";

const API_KEY = 'ee39ca8cad92a8b09ec7ae8a83a29296';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovie = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getCastById = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const getReviewsById = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};

export const getMoviesByQuery = async query => {
  const { data } = await axios.get(`/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return data;
};