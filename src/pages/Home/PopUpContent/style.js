import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Column = styled.div`
  width: 100%;
  max-width: 375px;
  overflow-y: auto;
  height: 460px;
  padding: 15px 30px;
  background-color: #181a1d;
  border-radius: 15px;
  color: #fff;
`;

export const WrapperItem = styled.div`
  position: relative;
`;

export const styledIcon = {
  position: 'absolute',
  fontSize: '16px',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
};

export const Item = styled.div`
  width: 100%;
  background-color: #2f253e;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 5px;
  text-transform: uppercase;
`;
