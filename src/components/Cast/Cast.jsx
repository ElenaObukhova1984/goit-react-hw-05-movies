import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import * as moviesAPI from 'service/api';
import { Loader } from 'components/Loader/Loader';
import { List, Item, Image, Name, Character } from '../Cast/Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const { movieId } = useParams();

  useEffect(() => {
       async function getCast() {
      try {
        setIsLoading(true);
        const { cast } = await moviesAPI.getCastById(movieId);
        setCast(cast);
        setIsLoading(false);
        
      } catch (error) {
         toast.error('Oops! Not found! Please try again!');
        
      }
    }

    getCast();
  }, [movieId]);

  return (
    <>
      
      <List>
        {cast && cast.length > 0 &&
          cast.map(({ name, profile_path, id, character }) => (
            <Item key={id}>
              {profile_path!== null && (
                <Image
                  src={`http://image.tmdb.org/t/p/w780/${profile_path}`}
                  alt="foto"
                />
              )}
              <Name>{name}</Name>
              <Character>Character: {character}</Character>
            </Item>
          ))}
      </List>
    {isLoading && <Loader />}  
    </>
  );
};



export default Cast;