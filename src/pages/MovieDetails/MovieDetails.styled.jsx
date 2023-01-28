import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  display: inline-block;
  padding: 4px 10px;
  margin-left: 4px;
  margin-bottom: 2px;
  border-radius: 2px;
  border: 1px solid #9a8e8e;
  color: #2c2a2a;
  font-size: 14px;
  font-weight:700;
  text-decoration: none;
  background-color:#d3cfcf;
`;

export const Container = styled.div`
  display: flex;
  padding-bottom: 5px;
  margin-bottom: 14px;
  border-bottom: 1px solid #ccc;
`;

export const ImageHolder = styled.div`
  padding: 2px;
  width: 30vw;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const InfoHolder = styled.div`
  padding: 10px;
  width: 70vw;
`;

export const Title = styled.p`
  margin-bottom: 14px;
  margin-top: 14px;
  font-size: 16px;
  font-weight: bold;
`;

export const Score = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
`;

export const Overview = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: bold;
`;

export const Text = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
`;

export const Genres = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: bold;
`;

export const ListGenres = styled.ul`
  display: flex;
  list-style: none;
 
`;

export const ItemGenre = styled.li`
  margin-right: 5px;
  font-size: 14px;
`;

export const AddInfo = styled.p`
  margin-bottom: 14px;
  margin-left: 5px;
  font-size: 14px;
`;

export const List = styled.ul`
  border-bottom: 1px solid #ccc;
  padding-bottom: 14px;
`;

export const Item = styled.li`
  margin-left: 24px;
  font-size: 14px;
  margin-bottom: 5px;
`;