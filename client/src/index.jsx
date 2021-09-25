import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from '@/App';
import GlobalStyles from '@/styles/GlobalStyles';
import { ThemeProvider } from '@/contexts/themeContext';
import store from '@/store/configureStore';

render(
  <Router>
    <ThemeProvider>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
