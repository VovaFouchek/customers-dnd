import { ThemeProvider } from 'styled-components';

import Home from 'pages/Home';
import { GlobalStyles } from 'styles/Global';
import { theme } from 'styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
