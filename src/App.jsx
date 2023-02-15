import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Home from 'pages/Home';
import store from 'redux/store';
import { GlobalStyles } from 'styles/Global';
import { theme } from 'styles/Theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
