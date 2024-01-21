import styled from 'styled-components';

export const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 24px;
`;

export const WelcomeHeader = styled.h1`
  font-size: 32px;
  font-weight: 800;
`;

export const FeatureList = styled.ul``;
export const FeatureItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: start;
  margin-left: 100px;
`;

export const ConclusionParagraph = styled.p`
  position: absolute;
  top: 170px;
  left: 100px;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  max-width: 350px;
  line-height: 2.5;
  color: #3470ff;
  text-align: start;
`;

export const Span = styled.span`
  color: #3470ff;
  font-weight: 700;
`;
