import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: #3470ff;
  font-weight: 500;
  text-decoration: underline;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.25;
`;
