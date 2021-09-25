import { Switch, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Nav from '@/components/shared/Nav';

export default function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
