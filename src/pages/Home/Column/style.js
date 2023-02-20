import styled from 'styled-components';

import { device } from 'styles/Breakpoints';

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 555px;
  padding: 24px 0;

  @media ${device.md} {
    min-height: 350px;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 30px;
  padding: 20px;
  border-radius: 15px;
  overflow-y: auto;
  background-color: #ddd;
`;

export const StyledTitle = styled.h2`
  text-align: center;
  color: #d0d0d0;
`;
