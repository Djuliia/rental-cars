import styled from 'styled-components';

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: color 250ms linear;
  &:hover > svg {
    stroke: #3470ff;
  }
`;
