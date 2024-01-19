import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 50px;
`;

export const BtnSearch = styled.button`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;
  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const StyledField = styled(Field)`
  margin-top: 8px;
  margin-right: 18px;
  padding: 14px 18px;
  background: #f7f7fb;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  &::placeholder {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
    color: #121417;
  }

  &.brand {
    padding: 14px 89px 14px 18px;
  }

  &.from {
    margin-right: 0;
    padding: 14px 41px 14px 24px;
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }

  &.to {
    padding: 14px 41px 14px 24px;
    border-radius: 0px 14px 14px 0px;
  }
  &:focus {
    caret-color: #121417;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: #8a8a89;
`;

// export const Option = styled.option`
//   display: inline-flex;
//   height: 272px;
//   padding: 14px 8px 14px 18px;
//   justify-content: flex-end;
//   align-items: flex-start;
//   gap: 112px;
//   flex-shrink: 0;
//   border-radius: 14px;
//   border: 1px solid rgba(18, 20, 23, 0.05);

//   background: #fff;

//   box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
// `;
