import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import App from '@/App';
import GlobalStyles from '@/styles/GlobalStyles';
import { ThemeProvider } from '@/contexts/themeContext';

render(
  <Router>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
