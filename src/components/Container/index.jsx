import styled from 'styled-components';

import { theme } from 'styles/Theme';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  font-family: 'Roboto', sans-serif;
  width: 100%;
  background: ${theme.colors.background};
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 15px;
`;
