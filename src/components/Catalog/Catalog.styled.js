import styled from 'styled-components';

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;
`;

export const BtnLoadMore = styled.button`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: transparent;
  border: none;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  cursor: pointer;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
