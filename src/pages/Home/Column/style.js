import styled from 'styled-components';

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 460px;
  padding: 24px 0;
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
