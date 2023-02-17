import styled from 'styled-components';

import { theme } from 'styles/Theme';

const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 15px;
  font-family: 'Roboto', sans-serif;
  background: ${theme.colors.background};
`;

export default Container;
