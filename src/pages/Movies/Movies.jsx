import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import * as moviesAPI from 'service/api';
import { Form, Input, Button, List, Item } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getMovies() {
      try {
        setIsLoading(true);
        const { results } = await moviesAPI.getMoviesByQuery(query);
         results.length > 0
          ? setTitles([...results]): toast.error(
              `Sorry! We couldn't find any movies by your query ${query}!`
          );

        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Not found! Please try again!');
        setIsLoading(false);
             }
    }

    getMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
    setTitles([]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" />
        <Button type="submit">Search</Button>
      </Form>
      
      <List>
        {titles &&
          titles.map(({ id, title }) => (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </Item>
          ))}
      </List>
      {isLoading && <Loader />}
      <Toaster />
    </>
  );
};



export default Movies;