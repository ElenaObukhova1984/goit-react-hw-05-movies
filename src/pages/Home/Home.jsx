import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import * as moviesAPI from 'service/api';
import { Title, List, Item } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
      async function getMovies() {
      try {
        setIsLoading(true);
        const { results } = await moviesAPI.getMovie();
        setMovies([...results]);
        setIsLoading(false);
       
      } catch (error) {
        toast.error('Oops! Not found! Please try again!');
             }
    }

    getMovies();
  }, []);

  return (
    <>
      {isLoading &&  <Loader/>} 
      <Title>Trending today</Title>
      <List>
        {movies.map(({ title, id }) => (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </Item>
          ))}
      </List>
      <Toaster/>
    </>
  );
};



export default Home;