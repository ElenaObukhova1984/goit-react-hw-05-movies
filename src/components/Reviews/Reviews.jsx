import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import * as moviesAPI from 'service/api';
import { Loader } from 'components/Loader/Loader';
import { List, Item, Author, Review, NoReview } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 

  const { movieId } = useParams();

  useEffect(() => {
    

    async function getReviews() {
      try {
        setIsLoading(true);
        const { results } = await moviesAPI.getReviewsById(movieId);

        setReviews(results);
        setIsLoading(false);
      } catch (error) {
       toast.error('Oops! Not found! Please try again!');
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <>
      
      {reviews && reviews.length > 0 && (
        <List>
          {reviews.map(({ author, content, id }) => (
            <Item key={id}>
              <Author>Author: {author}</Author>
              <Review>{content}</Review>
            </Item>
          ))}
        </List>
      )}
      {reviews.length === 0 && (
        <NoReview>We dont have any reviews for this movie</NoReview>
      )}
      {isLoading && <Loader />}
    </>
  );
};



export default Reviews;