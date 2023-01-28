import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as moviesAPI from 'service/api';
import { Loader } from 'components/Loader/Loader';

import {Button, Image, Container, ImageHolder, InfoHolder, Title, Score, Overview, Text, Genres, AddInfo, List, Item, ListGenres, ItemGenre,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [poster, setPoster] = useState('');

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
   
    async function getMovies() {
      try {
        setIsLoading(true);
        const result = await moviesAPI.getMovieById(movieId);
        setMovie(result);
        
        if (result.poster_path !== null) {
          setPoster(`http://image.tmdb.org/t/p/w780/${result.poster_path}`);
        }
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Not found! Please try again!');
      }
    }

    getMovies();
  }, [movieId]);
  const { title, vote_average, overview, genres } = movie;
  const userScore = (vote_average * 100 / 10).toFixed();
  return (
    <>
      <>
        <Button to={backLinkHref.current}>Go back</Button>
        <Container>
          <ImageHolder>
            <Image src={`${poster}`} alt="poster" />
          </ImageHolder>
          <InfoHolder>
            <Title>{title}</Title>
            <Score>User Score: {userScore}%</Score>
            <Overview>Overview</Overview>
            <Text>{overview}</Text>
            <Genres>Genres</Genres>
            <ListGenres>
              {genres && genres.map(({ id, name }) => (
                <ItemGenre key={id}>{name}</ItemGenre>
              ))}
            </ListGenres>
          </InfoHolder>
        </Container>
        <AddInfo>Additional information</AddInfo>
        <List>
          <Item>
            <Link to="cast">Cast</Link>
          </Item>
          <Item>
            <Link to="reviews">Reviews</Link>
          </Item>
        </List>
      </>
      
      <Suspense fallback={<Loader />}>
      <Outlet />
      </Suspense>
      {isLoading && <Loader />}
      <Toaster />
    </>
  );
}


export default MovieDetails;