import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BtnRental = styled(Link)`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  width: 168px;
  margin-top: 24px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;
`;

export const Container = styled.div``;

export const Img = styled.img`
  margin: 0 auto;
  border-radius: 14px;
  background: #f3f3f2;
  width: 461px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  line-height: 1.43;
  margin-top: 14px;
`;

export const AddInfo = styled.p`
  line-height: 1.43;
  font-weight: 500;
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const AddInfoList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const AddInfoItem = styled.li`
  padding: 7px 14px;
`;

export const Span = styled.span`
  color: #3470ff;
  font-weight: 600;
`;
