import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 320px;
  padding: 50px 24px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 50px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 50px 128px;
  }
`;
