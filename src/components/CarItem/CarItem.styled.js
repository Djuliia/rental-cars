import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 3 * 29px) / 4);
`;

export const BtnAdd = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: color 250ms linear;
  color: #000;
  svg {
    width: 24px;
    height: 24px;
    stroke: #3470ff;
    fill: transparent;
  }

  &:hover > svg {
    fill: #3470ff;
  }
  &:active > svg {
    fill: #3470ff;
  }
`;

export const Img = styled.img`
  height: 268px;
  width: 274px;
  object-fit: contain;
  border-radius: 14px;
`;

export const BtnLearnMore = styled.button`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  color: #fff;
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;
  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
