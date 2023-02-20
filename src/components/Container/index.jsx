import styled from 'styled-components';

import { device } from 'styles/Breakpoints';
import { theme } from 'styles/Theme';

const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 600px;
  border-radius: 15px;
  font-family: 'Roboto', sans-serif;
  background: ${theme.colors.background};

  @media ${device.md} {
    padding: 15px;
  }
`;

export default Container;
