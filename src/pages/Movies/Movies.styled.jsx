import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 12px;
`;

export const Input = styled.input`
  margin-bottom: 14px;
  width: 240px;
  border: 1px solid #ccc;
  &:hover,
  :focus {
    outline: 0;
    border-color: transparent;
    box-shadow: 0 0 3px #81c9e1;
  }
`;

export const Button = styled.button`
  border: 1px solid #ccc;
  font-weight:900px;
`;

export const List = styled.ul`
  margin-left: 14px;
  list-style: circle;
`;

export const Item = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
`;